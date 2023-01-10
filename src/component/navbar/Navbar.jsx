import React from 'react';
import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='n-left'>
                <div className='left'>
                <h2>RohitSocial.</h2>
                <Link to="/"><HomeIcon/></Link>
                <DarkModeIcon/>
                <WidgetsIcon/>
                </div>
                <div className='right'>
                <label>
                   <SearchIcon/>
                   <input/>
                </label>
                </div>  
            </div>
            <div className='n-right'>
                <div className='left'>
                <PersonIcon/>
                <EmailIcon/>
                <NotificationsIcon/>
                </div>
                <div className='right'>
                <AccountCircleIcon/>
                <p>Rohit Sah</p>
                </div>
                
            </div>
        </div>
    );
}

export default Navbar;