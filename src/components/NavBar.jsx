import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, IconButton,Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import user from '../assets/data/user.json'
import '../css/NavBar.css'

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
            <Link to="/buy" className={buttonClasses}>Buy</Link>
            <Link to="/rent" className={buttonClasses}>Rent</Link>
            <Link to="/knowledge-center" className={buttonClasses}>Knowledge Center</Link>
        </>
    );

    const buttonsRight = (
        <>
            <Link to="/re-pros" className={buttonClasses}>RE PROS</Link>
            <Link to="/events" className={buttonClasses}>Events</Link>
            <Link to="/leaderboard" className={buttonClasses}>Leaderboard</Link>
        </>
    );

    return (
        <nav style={{ zIndex: '50' }} className="bg-gray-800 text-yellow fixed z-auto w-full">
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
                                <MenuItem onClick={handleMobileMenuClose}><Link to="/buy" className={buttonClasses}>Buy</Link></MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}><Link to="/rent" className={buttonClasses}>Rent</Link></MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}><Link to="/knowledge-center" className={buttonClasses}>Knowledge Center</Link></MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}><Link to="/re-pros" className={buttonClasses}>RE PROS</Link></MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}><Link to="/events" className={buttonClasses}>Events</Link></MenuItem>
                                <MenuItem onClick={handleMobileMenuClose}><Link to="/leaderboard" className={buttonClasses}>Leaderboard</Link></MenuItem>
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
                                startIcon={<AccountCircle sx={{ color: 'white ' }} />}
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
                                <MenuItem onClick={handleClose}><Link to="/profile" className={buttonClasses}>Profile</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/settings" className={buttonClasses}>Settings</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/logout" className={buttonClasses}>Logout</Link></MenuItem>
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
