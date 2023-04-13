import Link from "../mui-next/link/Link";
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import LinkButton from "../mui-next/linkButton/LinkButton";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

export const Navbar = () => {

    const { asPath } = useRouter();


    return (
        <AppBar>
            <Toolbar>
                <Link href="/" sx={{ display:'flex', alignItems:'center' }} >
                    <Typography variant="h6"> Teslo | </Typography>
                    <Typography sx={{ ml: 0.5 }}> Shop </Typography>
                </Link>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                    <LinkButton href="/category/men" color={ asPath === '/category/men' ? 'primary' : 'info' }>Hombres</LinkButton>
                    <LinkButton href="/category/women" color={ asPath === '/category/women' ? 'primary' : 'info' }>Mujeres</LinkButton>
                    <LinkButton href="/category/kid" color={ asPath === '/category/kid' ? 'primary' : 'info' }>Niños</LinkButton>
                </Box>
                
                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>
                
                <Link href="/cart">
                    <IconButton>
                        <Badge badgeContent={ 2 } color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>

                <LinkButton href="/">
                    Menu
                </LinkButton>

            </Toolbar>
        </AppBar>
    )
}
