import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography, Grid, Chip } from '@mui/material';

import { ShopLayout } from "../../../components/layouts";
import Link from "../../../components/mui-next/link/Link";




const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra informacion si esta pagada la orden o no',
        width: 200,
        renderCell: ( params ) => {
            return (
                params.row.paid
                ? <Chip color="success" label='Pagada' variant="outlined" />
                : <Chip color="error" label='No pagada' variant="outlined" />
            )
        }
    },

    {
        field: 'orden',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,
        renderCell: ( params ) => {
            return (
                <Link href={`/orders/${ params.row.id }`} underline="always">
                    Ver orden
                </Link>
            )
        }
    }
];

const rows = [
    { id: 1, paid: true, fullname: 'Mariana Ardissone' },
    { id: 2, paid: false, fullname: 'Andrea Andez' },
    { id: 3, paid: true, fullname: 'Micaela Wagner' },
    { id: 4, paid: true, fullname: 'Diego Conchillo' },
    { id: 5, paid: false, fullname: 'Fernando Herrera' },
];



const HistoryPage = () => {
    return (
        <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes del cliente"}>
            <Typography variant="h1" component='h1'> Historial de ordenes </Typography>

            <Grid container>
                <Grid item xs={12} sx={{ height:650, width:'100%'}}>
                    <DataGrid 
                        rows={ rows }
                        columns={ columns }
                        pageSize={ 10 }
                        rowsPerPageOptions={[10]}
                    />
                </Grid>

            </Grid>

        </ShopLayout>
    )
}

export default HistoryPage;