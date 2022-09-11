import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Playstation.css';

import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { createStyles, IconButton, makeStyles, MenuList, Theme } from '@mui/material';
import { Link } from 'react-router-dom';

function PlayStation() {

    return (

        <>
            <div className='nav-play' >

                <img   src="https://i.imgur.com/VftwHXN.png" width={60} />

                <nav className="dropdownmenu">
                    <ul>

                        <li><span> PLAYSTATION</span>
                            <ul id="submenu-playstation">
                                <li><Link to="">PlayStation 5</Link></li>
                                <li><Link to="">PlayStation 4</Link></li>
                                <li>
                                    <Link to="">PlayStation 3</Link>
                                </li>
                                <li><Link to="">PlayStation 2</Link></li>
                                <li><Link to="">PlayStation 1</Link></li>
                            </ul>
                        </li>

                    </ul>
                </nav>


            </div>

        </>


    );
}

export default PlayStation;
