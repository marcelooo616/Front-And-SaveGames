import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { createStyles, IconButton, makeStyles, Theme } from '@mui/material';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './PCs.css';

function PCs(){

    return (
        <>
        <div className='nav-play' >

        <img src="https://i.imgur.com/ScXZmz8.png" width={60}  />

            <nav className="dropdownmenu">
                <ul>

                    <li><span> PCs</span>
                        <ul id="submenu-PCs">
                            <li><Link to="">Desenvolvimento</Link></li>
                            <li><Link to="">Desenvolvimento</Link></li>
                            <li>
                                <Link to="">Desenvolvimento</Link>
                            </li>
                            <li><Link to="">Desenvolvimento</Link></li>
                            <li><Link to="">Desenvolvimento</Link></li>
                        </ul>
                    </li>

                </ul>
            </nav>


        </div>

    </>
    );

}

export default PCs;