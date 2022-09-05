import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { createStyles, IconButton, makeStyles, Theme } from '@mui/material';
import { Box } from '@material-ui/core';

function PCs(){

    return (
        <PopupState variant="popover">
            {(popupState) => (
                <>
                    <Box >
                        <IconButton  {...bindTrigger(popupState)}>
                            <img src="https://i.imgur.com/ScXZmz8.png" width={60}  />
                        </IconButton>
                        <span className='padding-logo'>PCs</span>


                    </Box>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>PlayStation </MenuItem>
                        <MenuItem onClick={popupState.close}>Xbox </MenuItem>
                        <MenuItem onClick={popupState.close}>Nintendo</MenuItem>
                        
                    </Menu>
                </>
            )}
        </PopupState>
    );

}

export default PCs;