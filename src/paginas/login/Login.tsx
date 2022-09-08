import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Grid3x3 } from '@mui/icons-material';
import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import './Login.css'

function Login() {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            gridForm: {
                backgrounColor: 'black',
                
            },
            
        }))

    const classes = useStyles();

    return (
        <>
            <Grid container className='body'>
                <Grid xs={12} className='grid' >
                    <Box className='login'>

                        <Box className='login-title'>
                            <span>Login</span>
                        </Box>

                        <Box className='form'>
                            <form>
                                <TextField className='textfield' id='usuario' label='Usuario' name='usuario' margin='normal' fullWidth />
                                <TextField className='textfield' id='senha' label='senha' name='senha' margin='normal' fullWidth />
                            </form>
                            <Box marginTop={2} textAlign='center' >

                                <Button className='button' type='submit' variant='contained' color='success'>
                                    Logar
                                </Button>

                            </Box>
                        </Box>


                    </Box>

                </Grid>


            </Grid>
        </>
    );
}

export default Login;