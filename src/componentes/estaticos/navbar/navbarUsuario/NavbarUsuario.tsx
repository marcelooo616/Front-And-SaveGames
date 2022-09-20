import "./NavbarUsuario.css";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PlayStation from "../componentes/PlayStation";
import Xbox from "../componentes/Xbox";
import Nintendo from "../componentes/Nintendo";
import PCs from "../componentes/PCs";
import { Link } from 'react-router-dom';
function NavbarUsuario() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({

        }));
    const classes = useStyles();


    return (
        <>

            <Box>
                <span>Usuario comercial</span>
            </Box>

        </>
    );
}
export default NavbarUsuario;
