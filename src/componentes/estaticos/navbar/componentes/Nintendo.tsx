import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { createStyles, IconButton, makeStyles, Theme } from '@mui/material';
import { Link } from 'react-router-dom';
import './Nintendo.css';

function Nintendo(){
    return(
        <>
        <div className='nav-play' >

        <img src="https://i.imgur.com/qaiCvi0.png" width={60}  />

            <nav className="dropdownmenu">
                <ul>

                    <li><span> NINTENDO</span>
                        <ul id="submenu-nintendo">
                            <li><Link to="">Nintendo Switch</Link></li>
                            <li><Link to="">Nintendo Wii</Link></li>
                            <li>
                                <Link to="">Super Nintendo</Link>
                            </li>
                           
                        </ul>
                    </li>

                </ul>
            </nav>


        </div>

    </>
       
          
    );
}

export default Nintendo;