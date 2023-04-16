import { GetServerSideProps } from 'next';
import { Box, Typography } from '@mui/material';

import { ShopLayout } from '../../../components/layouts';

import { dbProducts } from '../../../database';
import { IProduct } from '../../../interfaces';
import { ProductList } from '../../../components/products';
import { FC } from 'react';

interface Props {
    products: IProduct[];
    foundProducts: boolean;
    query: string;
}


const SearchPage:FC<Props> = ({ products, foundProducts, query }) => {


    return (
        <ShopLayout title={'Teslo-shop - Search'} pageDescription={'Encuentra los mejores productos de Teslo aqui'}>
        <Typography variant='h1' component='h1'> Buscar productos </Typography>
        
        {
            foundProducts
                ? <Typography variant='h2' sx={{ mb: 1 }} textTransform='capitalize'> Termino: { query }  </Typography>
                : (
                    <Box display='flex'>
                        <Typography variant='h2' sx={{ mb: 1 }}> No encontramos ningun producto </Typography>
                        <Typography variant='h2' sx={{ ml: 1 }} color='secondary'  textTransform='capitalize'> { query } </Typography>
                    </Box>
                )
        }
        

        <ProductList products={ products } />

        </ShopLayout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { query = ''} = params as {query: string};

    if ( query.length === 0 ){
        return{
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    //no hay productos
    let products = await dbProducts.GetProductsByTerm( query );
    const foundProducts = products.length > 0;

    //retorno otros productos (TODO)
    if ( !foundProducts ){
        products =  await dbProducts.GetProductsByTerm('shirts');

        
    }

    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}




export default SearchPage;
