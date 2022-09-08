import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { createStyles, IconButton, makeStyles, MenuList, Theme } from '@mui/material';

function PlayStation() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };





    return (
       
                <>
                    <div  >
                        <Button onClick={handleClick}>
                            <img src="https://i.imgur.com/VftwHXN.png" width={60} />
                        </Button>
                        <span className='padding-logo'>PlayStation</span>


                    </div>

                    <Menu id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>PlayStation 5</MenuItem>
                        <MenuItem onClick={handleClose}>PlayStation 4</MenuItem>
                        <MenuItem onClick={handleClose}>PlayStation 3</MenuItem>
                        <MenuItem onClick={handleClose}>PlayStation 2</MenuItem>
                        <MenuItem onClick={handleClose}>PlayStation 1</MenuItem>
                    </Menu >
                </>
            
       
    );
}

export default PlayStation;
