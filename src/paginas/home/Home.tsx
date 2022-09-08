import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Carousel from "../../componentes/carousel/carousel";

function Home(){
    return (
        <>
        <Grid xs={12} >
          <Box>
            <Carousel />
          </Box>
        </Grid>
        </>
    );
}

export default Home;