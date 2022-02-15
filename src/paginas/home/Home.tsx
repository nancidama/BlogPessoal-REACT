import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#D3D3D3" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "grey11", fontWeight: "bold" }}>Seja bem Vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "grey11", fontWeight: "bold" }}>Expresse aqui seus Pensamentos e Opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "LightGrey", backgroundColor: "#363636", color: "LightGrey" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/tdY7iJp.png" alt="" width="400px" height="600px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "black" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;