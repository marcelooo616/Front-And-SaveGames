import React, {ChangeEvent, useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Grid3x3 } from '@mui/icons-material';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import UserLogin from '../../componentes/models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import {api} from '../../service/Service';
import { toast } from 'react-toastify';
/*
  Token admin = Basic cm9vdEBlbWFpbC5jb20uYnI6MTIzNDU2Nzg=
                

*/
function Login() {
    let navigate  = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            usuario:'',
            senha:'',
            token:''
        }
        );

        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        };

        useEffect(()=>{
            if(token !== ''){
                navigate('home')
            }
        },[token]);


        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
           
            try{
                 const resposta = await api.post(`/usuario/logar`, userLogin)
                 setToken(resposta.data.token)
                 alert('boa');
                    

            }catch(error){
                alert('zuado kk');
               

            }
             
            
        };
        

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            gridForm: {
                display:'flex',
                flexDirection:'row',
                justifyContent: 'center',
                alignItems:'center',
                color:'white',
                textAlign:'center',
                paddingTop: '20px',                
            },
            font:{
                paddingRight:'10px',
                fontSize:'12px',
            },            
        }))

    const classes = useStyles();

    return (
        <>
            <Grid container className='body'>
                <Grid xs={12} className='grid' >
                    <Box className='login'>
                        <Box className='login-title'>
                            <span>
                                Login
                            </span>
                        </Box>
                        <Box className='form'>
                                <form onSubmit={onSubmit}>
                                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}  className='textfield' id='usuario' label='Usuario' name='usuario' margin='normal' fullWidth />
                                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='textfield' id='senha' label='senha' name='senha' margin='normal' fullWidth />
                                            
                                        <Box marginTop={2} textAlign='center' >                                        
                                                <Button className='button' type='submit' variant='contained' color='success'>
                                                    Logar
                                                </Button>                                       
                                        </Box>
                                </form>
                            <Box className={classes.gridForm}>
                                    <Typography className={classes.font}>
                                        Nao tem conta?
                                    </Typography>
                                    <Link className='textDecorator' to='/cadastroUsuario'>
                                        <Typography  variant='body1'>
                                            Cadastre-se
                                        </Typography>
                                    </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;