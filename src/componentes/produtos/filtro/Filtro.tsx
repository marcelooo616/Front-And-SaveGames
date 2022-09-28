import { Box } from '@mui/material';
import React from 'react'
import './Filtro.css';

function Filtro(){
    return(<>
    <Box className='box-menu' >
            <nav className='nav-prod'>
               <ul><span  className='span-filtro'>Filtro</span>
                    <li>Genero</li>
                    <li>Plataforma</li>
                    <li>Ano de lancamento</li>
                    
                </ul>
            </nav>
            </Box>
    </>)
}

export default Filtro;