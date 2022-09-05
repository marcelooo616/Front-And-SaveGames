import "./Navbar.css";
import React from 'react';
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';

import MoreIcon from '@material-ui/icons/MoreVert';
import { Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import AccessAlarmsIcon from '@material-ui/icons';
import { Box } from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Navbar() {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({

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
                
                backgroundColor: 'blue',

            },
            text:{
                fontSize:'1.70rem',
                paddingTop:'0.50rem',
                
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
                paddingRight: '0px',

            },
            toolbarBot: {
                backgroundColor: '#1955c9',
            },

            inputInput: {
                padding: theme.spacing(2, 5, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
            },

        }));

    const classes = useStyles();

    return (

        <AppBar position="static" >

            <Toolbar className={classes.toolbarMid}>
                <Grid container>
                    <Grid xs={12} container direction="row-reverse" className={classes.toobarTop}  >
                        <Box m={1}>Sobre</Box>
                        <Box m={1}>Contato</Box>
                    </Grid>                 
                    <Grid xs={12} container direction="row" justifyContent="space-evenly">
                    <Box m={1} className={classes.text}>
                            <span className="font-logo">SAVEGAMES</span>
                        </Box>
                        <Box m={1} className={classes.search}>

                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder=" Pesquisa..."
                                classes={{

                                    input: classes.inputInput,
                                }}/>
                        </Box>
                        <Box m={1}  >
                            <IconButton aria-label="add to shopping cart" className={classes.button}>
                                <LoginIcon />
                            </IconButton>
                        </Box>
                        <Box m={1}>
                            <IconButton aria-label="add to shopping cart"  className={classes.button}>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid xs={12} container direction="row" alignItems="center" justifyContent="space-evenly" className={classes.toolbarBot}>
                        <Box component='span' m={1}>PlayStation</Box>
                        <Box component='span' m={1}>Xbox</Box>
                        <Box component='span' m={1}>Nintendo</Box>
                        <Box component='span' m={1}>PCs</Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>


    );
}

export default Navbar;



