import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './CardProduto.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';

function CardProdutos() {

  const [token] = useLocalStorage('token');
    const [] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    );

  var usuario;
  if (token == 'Basic cm9vdEBlbWFpbC5jb20uYnI6MTIzNDU2Nzg=') {
    usuario = <Box display="flex" justifyContent="center" mb={1.5}>

      <Link to="" className="text-decorator-none" >
        <Box mx={1}>
          <Button variant="contained" className="marginLeft" size='small' color="primary" >
            atualizar
          </Button>
        </Box>
      </Link>
      <Link to="" className="text-decorator-none">
        <Box mx={1}>
          <Button variant="contained" size='small' color="secondary">
            deletar
          </Button>
        </Box>
      </Link>
    </Box>
  } else {
    
  };

  return (
    <>

      <Box m={2} className='max' >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Produto
            </Typography>
            <Box className='card-img'>
              <img className='prod-img' src='https://i.imgur.com/rWHYvT5.png' />
            </Box>
            <Typography variant="h5" component="h2">
              God Of War
            </Typography>
            <Typography variant="body2" component="p">
              Plataforma: PS4
            </Typography>
            <Typography variant="body2" component="p">
              Genero: Ação
            </Typography>
          </CardContent>
          <CardContent>
            <Box className='card-prod' mb={1.5}>
              <Box>
                <Typography variant="body2" component="p">
                  <span className='text-valor'>Valor:</span> <span className='valor'>R$300.00</span>
                </Typography>

              </Box>
              <Box>
                <Typography variant="body2" component="p">
                  <AddShoppingCartIcon />
                </Typography>

              </Box>
            </Box>
          </CardContent>
          <CardActions>

          </CardActions>
          {usuario}
        </Card>
      </Box>

    </>)
}

export default CardProdutos;