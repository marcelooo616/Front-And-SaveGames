import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, InputBase } from '@mui/material';
import MoreIcon from '@material-ui/icons/MoreVert';
import { red } from "@material-ui/core/colors";
import AccessAlarmsIcon from '@material-ui/icons';
import { Box } from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PlayStation from "./PlayStation";
import Xbox from "./Xbox";
import Nintendo from "./Nintendo";
import PCs from "./PCs";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'relative',
      backgroundColor: '#e5e4fb',
      width: '60%',
      borderRadius: "30px"
      
  },
  searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },

  logo: {
      width: '3rem',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',



  },
  logoDirection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',

  },
  text: {
      fontSize: '1.70rem',
      paddingTop: '0.50rem',

  },

  button: {
      color: 'white',

  },
  toobarTop: {
      backgroundColor: '#4b70e9',
     

  },
  toolbarMid: {
      backgroundColor: '#4169e1',
      paddingLeft: '0px',
     width:'100%',


  },
  toolbarBot: {
      backgroundColor: 'black',
      
  },

  inputInput: {
      padding: theme.spacing(2, 5, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
  },


  }),
);

export default function Navbar2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Grid container>
                    <Grid xs={12} container direction="row-reverse" className={classes.toobarTop}  >
                        <Box m={1}>Sobre</Box>
                        <Box m={1}>Contato</Box>
                    </Grid>
                    <Grid  container direction="row" justifyContent="space-evenly">
                        <Box m={1} className={classes.text}>
                        <Link to='/home' className="link">
                            <IconButton aria-label="add to shopping cart" className={classes.button}>
                                <span className="font-logo">SAVEGAME</span>
                            </IconButton>
                        </Link>


                        </Box>
                        <Box m={1} className={classes.search}>

                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder=" Pesquisa..."
                                classes={{

                                    input: classes.inputInput,
                                }} />
                        </Box>
                        <Box m={1}  >

                            <Link to='/login' className="link">
                                <IconButton aria-label="add to shopping cart" className={classes.button}>
                                    <LoginIcon />
                                </IconButton>
                            </Link>



                        </Box>
                        
                        <Box m={1}>
                            <IconButton aria-label="add to shopping cart" className={classes.button}>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid xs={12} container direction="row"  justifyContent="space-evenly" className={classes.toolbarBot}>
                        <Box  className={classes.logoDirection}>
                            
                                <PlayStation />
                            

                        </Box>
                        <Box component='span' m={1} className={classes.logoDirection}>
                           
                                <Xbox />

                           
                        </Box>
                        <Box component='span' m={1} className={classes.logoDirection}>
                            <Nintendo />
                        </Box>
                        <Box component='span' m={1} className={classes.logoDirection}>
                            <PCs />
                        </Box>
                    </Grid>
                    
                </Grid> 
    </div>
  );
}