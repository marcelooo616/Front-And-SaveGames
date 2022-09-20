import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Carousel from "../../componentes/carousel/carousel";
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
          <Grid  item xs={12}>

            <img className="home-img" src="https://imgur.com/8xyxRiF.jpg"/>
            <img className="home-img" src="https://imgur.com/8xyxRiF.jpg"/>
            <img className="home-img" src="https://imgur.com/8xyxRiF.jpg"/>
            <img className="home-img" src="https://imgur.com/8xyxRiF.jpg"/>

          </Grid>
      
      </Grid>
    </>







  );
}

export default Home;