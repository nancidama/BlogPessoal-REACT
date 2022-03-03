import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import'./Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{height:'100px'}} className='backcolor'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='textos'>Nos sigam nas Redes Sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/nanci.vitor/" target="_blank">
                        <FacebookIcon className='redes'/>
                    </a>
                    <a href="https://www.instagram.com/nanci.damasceno/" target="_blank">
                        <InstagramIcon className='redes'/>
                    </a>
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                        <LinkedInIcon className='redes'/>
                    </a>
                </Box>
            </Box>
            <Box style={{height:'100px'}} className='backcolor'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='textos'>Nanci Damasceno:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="">
                        <Typography variant="subtitle2" gutterBottom className='textos' align="center">© 2022 Copyright:</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
          {footerComponent}  
        </>
    )
}

export default Footer;