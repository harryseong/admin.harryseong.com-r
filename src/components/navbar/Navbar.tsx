import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import './navbar.scss';
import { red } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


function Navbar() {

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        // onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <FontAwesomeIcon icon={solid("bars")} />
                    </IconButton>
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
