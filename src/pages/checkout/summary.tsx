import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import { ShopLayout } from "../../../components/layouts"
import LinkButton from "../../../components/mui-next/linkButton/LinkButton"
import { CartList, OrdenSummary } from "../../../components/cart"
import Link from "../../../components/mui-next/link/Link"

const SummaryPage = () => {
    return (
        <ShopLayout title="Resumen de orden" pageDescription={"Resumen de la orden"} >
            <Typography variant='h1' component='h1'> Resumen de la orden </Typography>

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
                                <LinkButton href="/" color="secondary" className="circular-btn" fullWidth>
                                    Confirmar orden
                                </LinkButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>    
        
    )
}

export default SummaryPage;