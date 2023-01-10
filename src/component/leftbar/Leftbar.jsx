import React from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import "./leftbar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MovieIcon from '@mui/icons-material/Movie';
import TimerIcon from '@mui/icons-material/Timer';

import EventNoteIcon from '@mui/icons-material/EventNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import EmailIcon from '@mui/icons-material/Email';

import PetsIcon from '@mui/icons-material/Pets';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

let top=[
    {id:1,name:"Rohit kumar sah",icon:<AccountCircleIcon/>},
    {id:1,name:"Friends",icon:<Diversity3Icon/>},
    {id:1,name:"Groups",icon:<WorkspacesIcon/>},
    {id:1,name:"Marketplace",icon:<StorefrontIcon/>},
    {id:1,name:"Watch",icon:<MovieIcon/>},
    {id:1,name:"Memories",icon:<TimerIcon/>},
]
let center=[
    {id:1,name:"Events",icon:<EventNoteIcon/>},
    {id:2,name:"Gaming",icon:<SportsEsportsIcon/>},
    {id:3,name:"Gallery",icon:<CollectionsIcon/>},
    {id:4,name:"Videos",icon:<VideoCameraFrontIcon/>},
    {id:5,name:"Messages",icon:<EmailIcon/>},
]
let bottom=[
    {id:1,name:"Fundraiser",icon:<PetsIcon/>},
    {id:2,name:"Tutorials",icon:<SchoolIcon/>},
    {id:3,name:"Courses",icon:<AutoStoriesIcon/>},
]

function Leftbar(props) {
    return (
        <div className='leftbar'>
            <div className='top'>
                {top.map((data)=><SidebarItem icon={data.icon} key={data.id} name={data.name}/>)}
            </div>
            <div className='center'>
            <hr/>
            <label>Your shortcuts</label>
                {center.map((data)=><SidebarItem icon={data.icon} key={data.id} name={data.name}/>)}
                <hr/>
            </div>
            <div className='bottom'>
            <label>Other</label>
                {bottom.map((data)=><SidebarItem icon={data.icon} key={data.id} name={data.name}/>)}
            </div>
        </div>
    );
}

export default Leftbar;