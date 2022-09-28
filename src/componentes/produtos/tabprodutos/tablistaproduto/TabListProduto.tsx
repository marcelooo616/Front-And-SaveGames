import React from 'react';
import './TabListProduto.css';
import { Grid } from '@mui/material';
import CardProduto from '../../cardproduto/CardProduto';

function TabListProduto() {

  return (
    <>
    <Grid container className='tab-home'>
          
         <Grid item xs={12} className="grid">
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
               
                
         </Grid>
    </Grid>
 </>)
}

export default TabListProduto;