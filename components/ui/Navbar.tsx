import { useContext, useState } from "react";
import { UiContext } from "../../context";
import Link from "../mui-next/link/Link";
import LinkButton from "../mui-next/linkButton/LinkButton";

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Toolbar, Typography } from '@mui/material';
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

export const Navbar = () => {

    const { asPath, push } = useRouter();
    const { toggleSideMenu } = useContext( UiContext );
    
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const onSearchTerm = () => {
        if( searchTerm.trim().length === 0 ) return;
        push(`/search/${ searchTerm }`);
    }



    return (
        <AppBar>
            <Toolbar>
                <Link href="/" sx={{ display:'flex', alignItems:'center' }} >
                    <Typography variant="h6"> Teslo | </Typography>
                    <Typography sx={{ ml: 0.5 }}> Shop </Typography>
                </Link>

                <Box flex={1} />

                <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' }}} className='fadeIn'>
                    <LinkButton href="/category/men" color={ asPath === '/category/men' ? 'primary' : 'info' }>Hombres</LinkButton>
                    <LinkButton href="/category/women" color={ asPath === '/category/women' ? 'primary' : 'info' }>Mujeres</LinkButton>
                    <LinkButton href="/category/kid" color={ asPath === '/category/kid' ? 'primary' : 'info' }>Niños</LinkButton>
                </Box>
                
                <Box flex={1} />

                {/* pantallas grandes */}
                {
                    isSearchVisible
                    ? (
                        <Input
                            sx={{ display: { xs: 'none', sm: 'flex' }}}
                            className="fadeIn"
                            autoFocus
                            value={ searchTerm }
                            onChange={(e) => setSearchTerm( e.target.value )}
                            onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={ () => setIsSearchVisible(false)}
                                    >
                                        <ClearOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    )
                    : (
                        <IconButton
                            onClick={ () => setIsSearchVisible(true)}
                            className="fadeIn"
                            sx={{ display: { xs: 'none', sm: 'flex'} }}

                        >
                            <SearchOutlined />
                        </IconButton>
                    )
                }

                {/* pantallas chicas */}
                <IconButton
                    sx={{ display: { xs: 'flex', sm: 'none'} }}
                    onClick={ toggleSideMenu }
                >
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
