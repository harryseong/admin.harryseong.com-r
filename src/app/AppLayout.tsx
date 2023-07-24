import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from "../common/components/navbar/Navbar";
import { Sidenav } from "../common/components/sidenav/Sidenav";


export function AppLayout() {
    return (
        <div>
            <Navbar />

            <Grid container spacing={2}>
                <Grid sx={{ display: { xs: 'none', md: 'block' } }} md={3}>

                    <Sidenav />

                </Grid>
                <Grid sm={12} md={9}>
                    <Outlet />
                </Grid>

            </Grid>
        </div>
    );
}
