import { FC, useState } from "react";
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from "next/router";
import LinkButton from "../../../components/mui-next/linkButton/LinkButton";
import { Box, Chip, Grid, Typography } from "@mui/material";

import { ShopLayout } from "../../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../../components/products";
import { ItemCounter } from "../../../components/ui";

import { dbProducts } from "../../../database";
import { ICartProduct, IProduct, ISize } from "../../../interfaces";



interface Props {
    product: IProduct;
}


const ProductPage:FC<Props> = ({ product }) => {

    const router = useRouter();

    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
        _id: product._id, 
        image: product.images[0], 
        price: product.price, 
        size: undefined,
        slug: product.slug, 
        title: product.title, 
        gender: product.gender, 
        quantity: 1,
    
    })

    const selectedSize = ( size: ISize ) => {
        setTempCartProduct ( currentProduct => ({
            ...currentProduct,
            size
        }));
    }

    const onUpdatedQuantity = ( quantity: number ) => {
        setTempCartProduct ( currentProduct => ({
            ...currentProduct,
            quantity
        }));
    }

    const onAddProduct = () => {
        if( !tempCartProduct.size ) return;
        // llamar la accion del context para agregar al carrito
        console.log({tempCartProduct});
        router.push('/cart')
    }

    return (
        <ShopLayout title={ product.title } pageDescription={ product.description }>
            
            <Grid container spacing={3}>

                <Grid item xs={12} sm={7}>
                    <ProductSlideshow
                        images={ product.images }
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>

                        {/* titulos */}
                        <Typography variant="h1" component='h1'> { product.title } </Typography>
                        <Typography variant="subtitle1" component='h2'> { `$${product.price}` } </Typography>

                        {/* cantidad */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            <ItemCounter
                                currentValue= { tempCartProduct.quantity }
                                updatedQuantity={onUpdatedQuantity}
                                maxValue= { product.inStock > 10 ? 10 : product.inStock}
                            />
                            <SizeSelector 
                                sizes={ product.sizes }
                                selectedSize={ tempCartProduct.size }
                                onSelectedSize={ selectedSize }
                            />
                        </Box>

                        {/* Agregar al carrito */}
                        {
                            ( product.inStock > 0 )
                            ? (
                                <LinkButton href="/cart" color="secondary" className="circular-btn" onClick={ onAddProduct }>
                                {
                                    tempCartProduct.size
                                        ? 'Agregar al carrito'
                                        : 'Seleccione una talla'
                                }
                            </LinkButton>
                            )
                            : (
                                <Chip label='No hay disponibles' color="error" variant="outlined" />
                            )
                        }


                        {/* Descripcion */}
                        <Box sx={{ mt:3 }}>
                            <Typography variant="subtitle2">Descripcion</Typography>
                            <Typography variant="body2">{ product.description }</Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

        </ShopLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const productSlugs = await dbProducts.getAllProductSlug();

    return {
        paths: productSlugs.map( ({ slug }) => ({
            params: {
                slug
            }
        })),
        fallback: "blocking"
    }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug = '' } = params as { slug: string };
    const product = await dbProducts.getProductBySlug( slug );

    if (!product){
        return{
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            product
        },
        //revalidar cada 24hs
        revalidate: 60 * 60 * 24
    }
}



export default ProductPage;