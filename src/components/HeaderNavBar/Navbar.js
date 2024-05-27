
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { BsCurrencyBitcoin } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 200;
            if (isScrolled !== scroll) {
                setScroll(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    return (
        <div className='navbar' id='navbar'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ backgroundColor: scroll ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)' }}>
                    <Toolbar className='toolbar'>
                        <Link to='/' className='logo' id='logo' >
                            <BsCurrencyBitcoin className='logo-1' /> | Crypto
                        </Link>
                        <div className='btn'>
                            <Link className='btn-nav' to='/'>Home</Link>
                            <Link className='btn-nav' to='about'>About</Link>
                            <Link className='btn-nav' to='pricing'>Pricing</Link>
                            <Link className='btn-nav' to='top-gainers'>Top Gainers</Link>
                            <Link className='btn-nav' to='top-losers'>Top Losers</Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar;

