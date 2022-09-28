import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaGenero.css';
import useLocalStorage from 'react-use-localstorage';

import { buscar } from '../../../service/Service';
import Genero from '../../models/Genero';


function ListaGenero() {

  const [genero, setGenero] = useState<Genero[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])


 

  async function getGenero() {
    await buscar('/genero', setGenero, {
        headers: {
            'Authorization': token
        }
    })
}


useEffect(() => {
  getGenero()
}, [genero.length])

  return (
    <>
    {
      genero.map(genero=>(
        <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {genero.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to='' className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to='' className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
    }
   
     
      
      
    </>
  );
}


export default ListaGenero;