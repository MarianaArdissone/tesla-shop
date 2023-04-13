import { FC } from "react";
import Link from "../mui-next/link/Link";

import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from "@mui/material"
import { initialData } from "../../database/products"
import { ItemCounter } from "../ui"


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

interface Props{
    editable?: boolean;
}


export const CartList:FC<Props> = ({ editable = false }) => {

    return (
        <>
            {
                productsInCart.map( product => (
                    <Grid container spacing={2} key={ product.slug } sx={{ mb:1 }}>
                        {/* llevar a la pag del producto */}
                        <Grid item xs={3}>
                            <Link href='/product/slug'>
                                <CardActionArea>
                                    <CardMedia
                                        image={ `/products/${ product.images[0] }` }
                                        component='img'
                                        sx={{ borderRadius: '5px' }}
                                    />
                                </CardActionArea>
                            </Link>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant="body1"> { product.title } </Typography>
                                <Typography variant="body1"> Talla: <strong>M</strong> </Typography>
                                
                                {
                                    editable
                                    ? <ItemCounter/>
                                    : <Typography variant="h6"> 3 items</Typography>
                                }
                                
                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center'flexDirection='column'>
                            <Typography variant="subtitle1"> { `$${ product.price }`} </Typography>

                            {
                                editable && (
                                    <Button variant="text" color="secondary">
                                        Remover
                                    </Button>
                                )
                            }
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}
