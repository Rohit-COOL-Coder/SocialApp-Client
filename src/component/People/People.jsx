import React from 'react';
import "./People.scss"
function People(props) {
    return (
        <div className='people'>
            <div>
            {props.label==="onlineFriends" ?<div className='showOnline'> <img src={props.img}/> <span className='greenDot'/> </div>:<img src={props.img}/>}
            <span>{props.name}</span>
            </div>
            {props.label==="suggestions" && < div className='action'> <button className='follow'>Follow</button> <button className='dismiss'>Dismiss</button></div>}
            {props.label==="lastActivities" && <p className='time'>{props.time}</p>}
            
        </div>
    );
}

export default People;