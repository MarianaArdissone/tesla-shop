import { Box, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../../components/layouts";
import LinkButton from "../../../components/mui-next/linkButton/LinkButton";
import Link from "../../../components/mui-next/link/Link";

const RegisterPage = () => {
    return (
        <AuthLayout title={'Ingresar'}>
            <Box sx={{ width: 350, padding: '10px 20px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h1" component='h1'> Registrarse </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Nombre completo' variant="filled" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Correo' variant="filled" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Contraseña' type="password" variant="filled" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <LinkButton href="/" color="secondary" className="circular-btn" size="large" fullWidth>
                            Ingresar
                        </LinkButton>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='end'>
                        <Link href="/auth/login" color="secondary" underline="always">
                            ¿Ya tienes cuenta? Iniciar sesion
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default RegisterPage;