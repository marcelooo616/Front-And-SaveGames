import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { createStyles, IconButton, makeStyles, Theme } from '@mui/material';

function PlayStation() {
    

    

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <>
                    <div  >
                        <IconButton  {...bindTrigger(popupState)}>
                            <img src="https://i.imgur.com/VftwHXN.png" width={60}  />
                        </IconButton>
                        <span className='padding-logo'>PlayStation</span>


                    </div>
                    
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>PlayStation 5</MenuItem>
                        <MenuItem onClick={popupState.close}>PlayStation 4</MenuItem>
                        <MenuItem onClick={popupState.close}>PlayStation 3</MenuItem>
                        <MenuItem onClick={popupState.close}>PlayStation 2</MenuItem>
                        <MenuItem onClick={popupState.close}>PlayStation 1</MenuItem>
                    </Menu>
                </>
            )}
        </PopupState>
    );
}

export default PlayStation;
