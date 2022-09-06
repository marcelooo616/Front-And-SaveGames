import { Box, Button, Grid, TextField } from "@mui/material";
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React from "react";
import './Footer.css'

function Footer() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({

            root: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '25ch',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    
                    

                }
            },

            footer: {
                backgroundColor: 'black',
               
                
            },
            titulo: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'red',
                fontSize: '25px',
                
            },
            input: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap:"wrap",
                justifyContent: 'space-evenly',
                color: 'white',
                margin:'50px',
                
               
                

            },
            form: {
                
                

            },
            margin: {
                margin: theme.spacing(1),
                backgroundColor: 'red',

            },
            extendedIcon: {
                marginRight: theme.spacing(1),
            },
            button:{
              color: 'red',
            },
            




        }));

    const classes = useStyles();


    return (
        <>
            <Grid container>
                <Grid xs={12} className={classes.footer}>
                    <Grid xs={12}>
                        <Box className={classes.titulo} m={1} >
                            <span >Cadastre-se para receber Promoções</span>
                        </Box>
                    </Grid>

                    <Grid xs={12} className={classes.input}>
                        <Box className={classes.form}>
                            <form className={classes.root} noValidate autoComplete="off">

                                <TextField id="filled-basic" label="Nome" variant="filled" className="textfield-Name"  />

                            </form>
                        </Box>
                        <Box>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="filled-basic" label="Email" variant="filled" className="textfield-Email"/>
                            </form>
                        </Box>                       
                            <Button  className='button' >                               
                                <span>Cadastrar</span>
                            </Button>
                    </Grid>
                </Grid>


            </Grid>
        </>
    );

}
export default Footer;