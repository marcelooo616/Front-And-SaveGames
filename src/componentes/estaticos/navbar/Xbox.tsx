
import { Box, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React from 'react';

function Xbox(){
    
    return (
        <PopupState variant='popover' >
            {(popupState) =>(
                <React.Fragment>
                    <Box m={1} alignItems="center" justifyContent='center' >
                        <IconButton {...bindTrigger(popupState)}>
                                 <img src="https://i.imgur.com/HSodJNO.png" width={60} />                               
                        </IconButton>
                        <span className='padding-logo'>XBOX</span>
                       
                    </Box>

                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Xbox Series X</MenuItem>
                        <MenuItem onClick={popupState.close}>Xbox Series S</MenuItem>
                        <MenuItem onClick={popupState.close}>Xbox One X</MenuItem>
                        <MenuItem onClick={popupState.close}>Xbox One </MenuItem>
                        <MenuItem onClick={popupState.close}>Xbox 360</MenuItem>
                    </Menu>
                    
                </React.Fragment>
            )}
        </PopupState>
    );
}

export default Xbox;