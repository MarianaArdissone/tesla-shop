import { Box, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../../components/layouts";
import { initialData } from "../../../database/products"
import LinkButton from "../../../components/mui-next/linkButton/LinkButton";
import { ProductSlideshow, SizeSelector } from "../../../components/products";
import { ItemCounter } from "../../../components/ui";


const product = initialData.products[0];

const ProductPage = () => {
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
                            <ItemCounter/>
                            <SizeSelector 
                                // selectedSize={ product.sizes[0] } 
                                sizes={ product.sizes }/>
                        </Box>

                        {/* Agregar al carrito */}
                        <LinkButton href="/" color="secondary" className="circular-btn">
                            Agregar al carrito
                        </LinkButton>

                        {/* <Chip label='No hay disponibles' color="error" variant="outlined" /> */}

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

export default ProductPage