import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, IconButton, Typography, Button } from '@mui/material';
import user from '../data/user.json'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMobileMenu = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const buttonClasses = 'text-gray-100 font-bold text-lg px-4 py-1';

    const buttonsLeft = (
        <>
            <button className={buttonClasses}>Buy</button>
            <button className={buttonClasses}>Rent</button>
            <button className={buttonClasses}>Knowledge Center</button>
        </>
    );

    const buttonsRight = (
        <>
            <button className={buttonClasses}>RE PROS</button>
            <button className={buttonClasses}>Events</button>
            <button className={buttonClasses}>Leaderboard</button>
        </>
    );

    return (
        <nav className="bg-gray-800 text-yellow fixed w-full">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <div className="md:hidden">
                            <IconButton color="inherit" sx={{ color: 'white' }} onClick={handleMobileMenu}>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-mobile"
                                anchorEl={menuAnchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(menuAnchorEl)}
                                onClose={handleMobileMenuClose}
                            >
                                <MenuItem onClick={handleMobileMenuClose}>Buy</MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}>Rent</MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}>Knowledge Center</MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}>RE PROS</MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}>Events</MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}>Leaderboard</MenuItem>
                            </Menu>
                        </div>
                        <div className="hidden md:flex items-center space-x-2">
                            {buttonsLeft}
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="text-yellow-50 text-3xl font-bold" style={{ color: '#B4D334' }}>
                            reverifi
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="hidden md:flex items-center space-x-2">
                            {buttonsRight}
                        </div>
                        
                        <IconButton color="inherit" sx={{ color: 'white' }}>
                            <NotificationsIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <div>
                            <Button
                                sx={{ color: 'white' }}
                                startIcon={<AccountCircle sx={{ color: 'white' }} />}
                                onClick={handleMenu}
                            >
                                {user.name}
                            </Button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Settings</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pg-2">
                        {buttonsLeft}
                        {buttonsRight}
                    </div>
                )
            }
        </nav>
    );
}

export default Nav;
