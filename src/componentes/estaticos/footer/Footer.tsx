import { Box, Button, Grid, Link, TextField } from "@mui/material";
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                fontSize: '25px',
            },
            input: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: "wrap",
                justifyContent: 'space-evenly',
                color: 'white',
                margin: '50px',
            },
            margin: {
                margin: theme.spacing(1),
                backgroundColor: 'red',
            },
            extendedIcon: {
                marginRight: theme.spacing(1),
            },
            button: {
                color: 'red',
            },
            Copyright: {
                textAlign: 'center',
                fontSize: '10px',
                color: 'white'
            },
            socialButton: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'rgb(27, 27, 27)'
            },
            formasDePagamento: {
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'rgb(7, 10, 5)',
                color: 'white',
                textAlign: 'center'
            },
            img: {
                display: 'flex',
                flexWrap: 'wrap',
                height: '50px',
                width: '65px',
            }
        }));

    const classes = useStyles();
    return (
        <>
            <Grid container className="footer">
                <Grid xs={12} className={classes.footer}>
                    <Grid xs={12}>
                        <Box className={classes.titulo} m={1} >
                            <span >Cadastre-se para receber Promoções</span>
                        </Box>
                    </Grid>
                    <Grid xs={12} className={classes.input}>
                        <Box >
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="filled-basic" label="Nome" variant="filled" className="textfield-Name" />
                            </form>
                        </Box>
                        <Box>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="filled-basic" label="Email" variant="filled" className="textfield-Email" />
                            </form>
                        </Box>
                        <Button className='button' >
                            <span>Cadastrar</span>
                        </Button>
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.formasDePagamento}>
                    <Grid xs={6}  >
                        <div  >
                            <span>Formas de pagamento</span>
                            <div className="img">
                                <img src="https://imgur.com/j5t6mTR.png" className={classes.img}></img>
                                <img src="https://i.imgur.com/17oWCcz.png" className={classes.img}></img>
                                <img src="https://i.imgur.com/A3Egp6q.png" className={classes.img}></img>
                                <img src="https://imgur.com/HsZLenH.png" className={classes.img}></img>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <div>
                            <span>Institucional</span>
                            <div className="institucional">
                                <span>Fale Conosco</span>
                                <span>Politica de Privacidade</span>
                                <span>Politica de Reembolso</span>
                                <span>Politica de Garantia</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.socialButton}>
                    <Button>
                        <Link>
                            <InstagramIcon />
                        </Link>
                    </Button>
                    <Button>
                        <Link>
                            <FacebookIcon />
                        </Link>
                    </Button>
                    <Button>
                        <Link>
                            <GitHubIcon />
                        </Link>
                    </Button>                                                                       
                </Grid>
                <Grid xs={12}>
                    <div className="div">
                        <span className={classes.Copyright}>© Copyright 2022 savegames.com.br - All Rights Reserved - Legal</span>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
export default Footer;