
import { Box, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React from 'react';
import { Link } from 'react-router-dom';
import './Xbox.css';

function Xbox(){
    
    return (
        <div className='nav-play' >

<img src="https://i.imgur.com/HSodJNO.png" width={60} />    

        <nav className="dropdownmenu">
            <ul>

                <li><span> XBOX</span>
                    <ul id="submenu-xbox">
                        <li><Link to="http://www.jochaho.com/wordpress/creating-links-to-sections-within-a-webpage/">Xbox Series X</Link></li>
                        <li><Link to="http://www.jochaho.com/wordpress/creating-links-to-sections-within-a-webpage/">Xbox Series S</Link></li>
                        <li>
                            <Link to="http://www.jochaho.com/wordpress/creating-links-to-sections-within-a-webpage/">Xbox One X</Link>
                        </li>
                        <li><Link to="http://www.jochaho.com/wordpress/creating-links-to-sections-within-a-webpage/">Xbox One</Link></li>
                        <li><Link to="http://www.jochaho.com/wordpress/creating-links-to-sections-within-a-webpage/">Xbox 360</Link></li>
                    </ul>
                </li>

            </ul>
        </nav>


    </div>
    );
}

export default Xbox;