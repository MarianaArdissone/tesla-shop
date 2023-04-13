import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../../../components/layouts";
import Image from "next/image";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import LinkButton from "../../../components/mui-next/linkButton/LinkButton";

const EmptyPage = () => {
    return (
        <ShopLayout title="Carrito vacio" pageDescription="No hay articulos en tu carrito de compras">
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', height:'calc(100vh - 200px)'}}>
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }}/>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography> Su carrito esta vacio</Typography>
                    <LinkButton href="/">
                        Regresar
                    </LinkButton>
                </Box>

            </Box>
        </ShopLayout>
    )
}

export default EmptyPage;