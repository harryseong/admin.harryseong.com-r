import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

const theme: any = createTheme({
    palette: {
        mode: 'dark',
        // primary: {
        //     // light: will be calculated from palette.primary.main,
        //     main: '#ff4400',
        //     // dark: will be calculated from palette.primary.main,
        //     // contrastText: will be calculated to contrast with palette.primary.main
        // },
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    }
});

export default { theme };