import { Box, Card, CardContent, Chip, Divider, Grid, Typography } from "@mui/material"
import { ShopLayout } from "../../../components/layouts"
import LinkButton from "../../../components/mui-next/linkButton/LinkButton"
import { CartList, OrdenSummary } from "../../../components/cart"
import Link from "../../../components/mui-next/link/Link"
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material"

const OrderPage = () => {
    return (
        <ShopLayout title="Resumen de la orden 68697867768213" pageDescription={"Resumen de la orden"} >
            <Typography variant='h1' component='h1'> Orden: ABC123 </Typography>

            {/* <Chip
                sx={{ my: 2 }}
                label='Pendiente de pago'
                variant="outlined"
                color="error"
                icon={ <CreditCardOffOutlined />}
            /> */}

            <Chip
                sx={{ my: 2 }}
                label='Tu orden ya fue pagada'
                variant="outlined"
                color="success"
                icon={ <CreditScoreOutlined />}
            />

            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                
                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2"> Resumen (3 productos) </Typography>
                            <Divider sx={{ my:1 }}/>

                            <Box display='flex' justifyContent='space-between'>
                            <Typography variant="subtitle1"> Direccion de entrega</Typography>
                                <Link href="/checkout/address" underline="always">
                                    Editar
                                </Link>
                            </Box>
                            
                            <Typography> Mariana Ardissone</Typography>
                            <Typography> 323 algun lugar</Typography>
                            <Typography> Stittsbville, HYA 23S </Typography>
                            <Typography> +1 123123</Typography>

                            <Divider sx={{ my:1 }}/>

                            <Box display='flex' justifyContent='end'>
                                <Link href="/cart" underline="always">
                                    Editar
                                </Link>
                            </Box>

                            <OrdenSummary/>

                            <Box sx={{ mt: 3 }}>
                                {/* todo */}
                                <h1>Pagar</h1>
                                <Chip
                                    sx={{ my: 2 }}
                                    label='Tu orden ya fue pagada'
                                    variant="outlined"
                                    color="success"
                                    icon={ <CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>    
        
    )
}

export default OrderPage;