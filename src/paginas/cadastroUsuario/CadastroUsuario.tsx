import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css'
function CadastroUsuario() {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            formulario: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                color: 'white',
                margin: '50px',

            },
            textField: {
                backgroundColor: 'white',
            },
            padding: {
                padding: '10px',
            },
            gridForm: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                paddingTop: '20px',


            },
            font: {
                paddingRight: '10px',
                fontSize: '12px',
            },
            cancelar:{
                marginTop:'10px',
            }

        }))

    const classes = useStyles();
    return (
        <>
            <Grid container className='body'>
                <Grid xs={12} className='grid-cadastro' >
                    <Box className='usuario-cadastro'>

                        <Box className='cadastro-title'>
                            <span>Cadastre-se</span>
                        </Box>

                        <Box className='cadastro-form'>
                            <form>
                                <TextField className='cadastro-textfield' id='nome' label='Nome' name='nome' margin='normal' fullWidth />
                                <TextField className='cadastro-textfield' id='usuario' label='Email' name='usuario' margin='normal' fullWidth />
                                <TextField className='cadastro-textfield' id='senha' label='Senha' name='senha' margin='normal' type='password' fullWidth />
                                <TextField className='cadastro-textfield' id='confirmarSenha' label='Confirmar Senha' name='confirmarSenha' margin='normal' type='password' fullWidth />
                            </form>
                            <Box marginTop={2} textAlign='center' >

                                <Button className='button' type='submit' variant='contained' >
                                    Cadastrar

                                </Button>
                                <Box className={classes.cancelar}>
                                    <Link className='textDecorator' to='/login'>
                                        <Typography variant='body1'>Cancelar</Typography>
                                    </Link>
                                </Box>



                            </Box>


                        </Box>



                    </Box>



                </Grid>


            </Grid>
        </>




    )

}

export default CadastroUsuario;