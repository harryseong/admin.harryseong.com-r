import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from "../components/navbar/Navbar";
import { Sidenav } from "../components/sidenav/Sidenav";


export function AppLayout() {
    return (
        <div>
            <Navbar />

            <Grid container spacing={2}>
                <Grid xs={4} md={3} lg={3}>

                    <Sidenav />

                </Grid>
                <Grid xs={8} md={9} lg={9}>
                    <Outlet />
                </Grid>

            </Grid>
        </div>
    );
}
