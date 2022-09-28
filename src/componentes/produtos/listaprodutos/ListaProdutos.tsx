import React from 'react';
import './ListaProdutos.css';
import { Grid } from '@mui/material';
import CardProduto from '../cardproduto/CardProduto';
import Filtro from '../filtro/Filtro';

function ListaProdutos() {

  return (
    <>
    <Grid container className='body'>
          <Grid item xs={2} className='menu-lateral'  >
                  <Filtro/>                 
         </Grid>
         <Grid item xs={9} className="grid">
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                
         </Grid>
    </Grid>
 </>)
}

export default ListaProdutos;