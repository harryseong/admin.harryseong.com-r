import { AppBar, Toolbar, Typography } from "@mui/material";
import './navbar.scss';
import { red } from "@mui/material/colors";

function Navbar() {

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography
                        color={red}
                        className="logo"
                        variant="h6"
                        component="a"
                        href="/">
                        {process.env.REACT_APP_TITLE}
                    </Typography>

                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}

export default Navbar;
