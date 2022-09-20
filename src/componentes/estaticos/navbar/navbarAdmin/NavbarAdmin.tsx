import "./NavbarAdmin.css";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PlayStation from "../componentes/PlayStation";
import Xbox from "../componentes/Xbox";
import Nintendo from "../componentes/Nintendo";
import PCs from "../componentes/PCs";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
function NavbarAdmin() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            admin: {
                display: 'flex',
                justifyContent: 'space-evenly',
                color: 'black',
                backgroundColor: '#e5e4fb',

            },


        }));
    const classes = useStyles();
    return (

        <Grid container>
            <Grid xs={12} className="menu-admin" >
            <Button className="button-admin">
                <Box m={5} className="box-item" >
                   
                        <span>analytics</span>
                    
                </Box>
                </Button>
                <Button className="button-admin">
                <Box m={5}>
                    
                        <span>Generos</span>
                    
                </Box>
                </Button>
                <Button className="button-admin">
                <Box m={5}>
                    
                        <span>Produtos</span>
                    
                </Box>
                </Button>
                <Button className="button-admin">
                    <Box m={5}>

                       Usuarios

                    </Box>
                </Button>
                <Button className="button-admin">
                <Box m={5}>
                    
                        <span>Promções</span>
                    
                </Box>
                </Button>



            </Grid>
        </Grid>







    );
}
export default NavbarAdmin;



