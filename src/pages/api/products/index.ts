import type { NextApiRequest, NextApiResponse } from 'next'
import { db, SHOP_CONSTANTS } from '../../../../database'
import { Product } from '../../../../models'
import { IProduct } from '../../../../interfaces'

type Data = 
    | { message: string }
    | IProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch( req.method ){
        case 'GET':
            return getProducts( req, res )
        
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { gender = 'all' } = req.query;

    let condition = {};

    if ( gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`) ){
        condition = { gender };
    }

    await db.connect();
    const products = await Product.find(condition)
    // filtro solo los datos que necesito para que no me traiga todo de la base de datos y le resto el id
                                    .select('title images price inStock slug -_id')
                                    .lean();

    await db.disconnect();

    return res.status(200).json( products );

}

