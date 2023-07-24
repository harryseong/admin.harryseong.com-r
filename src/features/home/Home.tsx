import Grid from '@mui/material/Unstable_Grid2';
import './home.scss';
import { Box, Paper } from '@mui/material';

function Home() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} lg={5}>
                    <Paper className='home1' variant='outlined'>
                        <h2>Home1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veritatis, impedit nemo porro repellendus doloremque ad expedita, est consequuntur illo sed. Laudantium minima libero tenetur asperiores cupiditate quam incidunt veritatis.</p>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <Paper className='home2' variant='outlined'>
                        <h2>Home2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veritatis, impedit nemo porro repellendus doloremque ad expedita, est consequuntur illo sed. Laudantium minima libero tenetur asperiores cupiditate quam incidunt veritatis.</p>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <Paper className='home3' variant='outlined'>
                        <h2>Home3</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veritatis, impedit nemo porro repellendus doloremque ad expedita, est consequuntur illo sed. Laudantium minima libero tenetur asperiores cupiditate quam incidunt veritatis.</p>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;
