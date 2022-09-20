
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import NavbarAdmin from "./navbarAdmin/NavbarAdmin";
import UserLogin from "../../models/UserLogin";
import NavbarUsuario from "./navbarUsuario/NavbarUsuario";
import NavbarOffline from './navbarOffline/NavbarOffline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PlayStation from './componentes/PlayStation';
import Nintendo from './componentes/Nintendo';
import Xbox from './componentes/Xbox';
import LogoutIcon from '@mui/icons-material/Logout';
import PCs from './componentes/PCs';



function Navbar() {
    const [token] = useLocalStorage('token');
    const [] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    );
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
            },
            toolbarBot: {
                backgroundColor: 'black',
            },
            inputInput: {
                padding: theme.spacing(2, 5, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
            },
            root: {
                maxWidth: '100%',
            },
        }));
    const classes = useStyles();
    var usuario;
    var login;
    if (token == 'Basic cm9vdEBlbWFpbC5jb20uYnI6MTIzNDU2Nzg=') {
        usuario = <NavbarAdmin />
        login =  <LogoutIcon />
    } else if (token !== '') {
        usuario = <NavbarUsuario />
        login =  <LogoutIcon />
    } else {
        usuario = <NavbarOffline />
        login = <LoginIcon />
    }
    return (

        <div className={classes.root}>
            <AppBar position="static"  >
                <Toolbar className={classes.toolbarMid}>
                    <Grid container>
                        <Grid xs={12} container direction="row-reverse" className={classes.toobarTop}  >
                            <Box m={1}>Sobre</Box>
                            <Box m={1}>Contato</Box>
                        </Grid>
                        <Grid container direction="row" justifyContent="space-evenly">
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
                                        {login}
                                    </IconButton>
                                </Link>
                            </Box>
                            <Box m={1}>
                                <IconButton aria-label="add to shopping cart" className={classes.button}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid xs={12} container direction="row" justifyContent="space-evenly" className={classes.toolbarBot}>
                            <Box className={classes.logoDirection}>
                                <PlayStation nome='playstation' />
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
                       <Grid xs={12}>
                            {usuario}
                       </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>

    );
}
export default Navbar;