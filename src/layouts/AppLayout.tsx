import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from "../components/navbar/Navbar";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";


export function AppLayout() {
    return (
        <div>
            <Navbar />

            <Grid container spacing={2}>
                <Grid xs={4} md={3} lg={3}>

                    <List
                        component='nav'
                        subheader={<ListSubheader>Pages</ListSubheader>}
                    >
                        <ListItemButton>
                            <ListItemIcon>T</ListItemIcon>
                            <ListItemText>Places</ListItemText>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>A</ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItemButton>
                    </List>

                </Grid>
                <Grid xs={8} md={9} lg={9}>
                    <Outlet />
                </Grid>

            </Grid>
        </div>
    );
}
