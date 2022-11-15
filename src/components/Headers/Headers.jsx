import React from 'react'
import './Headers.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Headers() {
    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <ReorderIcon />
                </IconButton>
                <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt='logo' />
            </div>
            <div className='header_middle'>
                <div className='search_mail'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input type='text' placeholder='Search mail' />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                </div>
            </div>
            <div className='header_right'>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Headers
