import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { createStyles, IconButton, makeStyles, Theme } from '@mui/material';


function Nintendo(){
    return(
        <PopupState variant='popover' >
            {(popupState) =>(
                <>
                    <div>
                        <IconButton {...bindTrigger(popupState)}>
                        <img src="https://i.imgur.com/qaiCvi0.png" width={60}  />
                        </IconButton>
                        <span className='padding-logo'>NINTENDO</span>
                    </div>

                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Nintendo Switch</MenuItem>
                        <MenuItem onClick={popupState.close}>Nintendo Wii</MenuItem>
                        <MenuItem onClick={popupState.close}>Super Nintendo</MenuItem>
                        
                    </Menu>
                </>
            )}
        </PopupState>
    );
}

export default Nintendo;