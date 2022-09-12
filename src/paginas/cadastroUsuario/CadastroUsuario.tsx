import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../componentes/models/Usuario';
import { cadastroUsuario } from '../../service/Service';
import './CadastroUsuario.css'
function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<Usuario>(
        {
            id:0,
            nome:'',
            usuario:'',
            senha:''
        })
    const [userResult, setUserResult] = useState<Usuario>(
        {
            id:0,
            nome:'',
            usuario:'',
            senha:''
        });
    useEffect(()=>{
        if(userResult.id !== 0){
            navigate('/login')
        }
    },[userResult]);

    function confirmarSenhaHandle(e:ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    };

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    async function onSubmit(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
            cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

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
        }));

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
                            <form onSubmit={onSubmit}>
                                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}  className='cadastro-textfield' id='nome' label='Nome' name='nome' margin='normal' fullWidth />
                                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='cadastro-textfield' id='usuario' label='Email' name='usuario' margin='normal' fullWidth />
                                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='cadastro-textfield' id='senha' label='Senha' name='senha' margin='normal' type='password' fullWidth />
                                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} className='cadastro-textfield' id='confirmarSenha' label='Confirmar Senha' name='confirmarSenha' margin='normal' type='password' fullWidth />

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
                            
                            </form>
                            


                        </Box>



                    </Box>



                </Grid>


            </Grid>
        </>




    )

}

export default CadastroUsuario;