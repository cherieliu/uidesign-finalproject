import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import menu from './Images/menu.png';
import { useNavigate } from "react-router-dom";


export default function NavigationMenu(zone) {
    const navigate = useNavigate();
    const [anchor, setAnchor] = useState(null);
    const onClick = (event) => {
        console.log('clicked')
        setAnchor(event.currentTarget);
    };

    const onClose = () => {
        setAnchor(null);
    };

    const navToHome = () => {
        navigate('/home');
    };
    const navToHelp = () => {
        navigate('/help');
    };
    const navToAlerts = () => {
        navigate('/alerts');
    };
    const navToUnsafe = () => {
        navigate('/unsafe');
    };

    const open = Boolean(anchor);
    return (
        <>
            <img src={menu}
                width={40}
                height={40}
                onClick={onClick} />
            <Menu
                anchorEl={anchor}
                id='nav-menu'
                open={open}
                onClose={onClose}
            >
                <MenuItem onClick={navToHome}>
                    Home
                </MenuItem>
                <MenuItem onClick={navToAlerts}>
                    Alerts
                </MenuItem>
                <MenuItem onClick={navToHelp}>
                    Help Options
                </MenuItem>
                <MenuItem onClick={navToUnsafe}>
                    Edit Mode
                </MenuItem>
            </Menu>
        </>
    )
}
