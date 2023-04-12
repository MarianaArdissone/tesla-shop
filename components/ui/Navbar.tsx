import Link from "../mui-next/link/Link";
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import LinkButton from "../mui-next/linkButton/LinkButton";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link href="/" sx={{ display:'flex', alignItems:'center' }} >
                    <Typography variant="h6"> Teslo | </Typography>
                    <Typography sx={{ ml: 0.5 }}> Shop </Typography>
                </Link>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                    <LinkButton href="/category/men">Hombres</LinkButton>
                    <LinkButton href="/category/women">Mujeres</LinkButton>
                    <LinkButton href="/category/kid">Niños</LinkButton>
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
