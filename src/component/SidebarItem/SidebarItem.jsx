import React from 'react';
import "./SidebarItem.scss"
function SidebarItem(props) {
    return (
        <div className='sidebar-item'>
            {props.icon}
            <span>{props.name}</span>
        </div>
    );
}

export default SidebarItem;