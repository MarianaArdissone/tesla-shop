import { useContext } from "react";
import { UiContext } from "../../context";
import Link from "../mui-next/link/Link";
import LinkButton from "../mui-next/linkButton/LinkButton";

import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

export const Navbar = () => {

    const { asPath } = useRouter();
    const { toggleSideMenu } = useContext( UiContext );

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

                <Button onClick={ toggleSideMenu }>
                    Menu
                </Button>

            </Toolbar>
        </AppBar>
    )
}
