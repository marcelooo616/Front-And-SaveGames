import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './HomeProduto.css';
import { Grid } from '@mui/material';
import ListaProdutos from '../genero/produtos/listaprodutos/ListaProduto';

function HomeProdutos() {

  return (
    <>
       <Grid container className='body'>
        <Grid item xs={2} className='menu-lateral'  >
            <Box className='box-menu' >
            <nav className='nav-prod'>
               <ul><span  className='span-filtro'>Filtro</span>
                    <li>Genero</li>
                    <li>Plataforma</li>
                    <li>Ano de lancamento</li>
                    
                </ul>
            </nav>
            </Box>
           
           
                
            
           
        </Grid>
            <Grid item xs={9} className="grid">
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
                   <ListaProdutos/>
            </Grid>
       </Grid>
    </>
    )
}

export default HomeProdutos;