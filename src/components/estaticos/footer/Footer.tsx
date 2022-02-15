import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#808080", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>Me Sigam nas Redes Sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/nanci.vitor/" target="_blank">
                                <FacebookIcon style={{ fontSize: 60, color: "black" }} />
                            </a>
                            <a href="https://www.instagram.com/nanci.damasceno/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/feed/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#808080", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "black" }} align="center">Nanci Damasceno</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;