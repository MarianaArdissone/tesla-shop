import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts"
import Image from "next/image";

const Custom404 = () => {
    return (
        <ShopLayout title="Page not found" pageDescription="No hay nada que mostrar aqui">
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', height:'calc(100vh - 200px)'}}>
                <Image src='/assets/images/empty-state/emptystate.png' alt="empty state" width={80} height={80}/>
                <Typography variant="h1" component='h1' fontSize={50} fontWeight={200} marginTop={ 2 } marginLeft={ 1 }> 404</Typography>
                <Typography marginLeft={ 2 }> No encontramos ninguna pagina aqui</Typography>
            </Box>

        </ShopLayout>
    )
    }

export default Custom404;