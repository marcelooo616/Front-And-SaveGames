
import React,{  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import NavbarAdmin from "./navbarAdmin/NavbarAdmin";
import UserLogin from "../../models/UserLogin";
import NavbarUsuario from "./navbarUsuario/NavbarUsuario";
import NavbarOffline from './navbarOffline/NavbarOffline';


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
    var usuario;
    if (token == 'Basic cm9vdEBlbWFpbC5jb20uYnI6MTIzNDU2Nzg='){
       usuario = <NavbarAdmin/>
    }else if(token !== ''){
        usuario = <NavbarUsuario/>
    }else{
        usuario = <NavbarOffline/>
    }
    return (
        <>
           {usuario}         
        </>
    );
}
export default Navbar;