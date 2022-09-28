import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Carousel from "../../componentes/carousel/carousel";
import TabListProduto from "../../componentes/produtos/tabprodutos/tablistaproduto/TabListProduto";
import TabProduto from "../../componentes/produtos/tabprodutos/TabProduto";

import './Home.css';

function Home() {
  return (

    <>
      <Grid xs={12} >
        <Box className="carousel">
          <Carousel />
        </Box>
      </Grid>
      <Grid container className="backgound-img"> 
          <Grid  item xs={12} >

           <TabListProduto/>

          </Grid>
      
      </Grid>
    </>







  );
}

export default Home;