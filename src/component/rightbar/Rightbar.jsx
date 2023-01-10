import React from 'react';
import "./rightbar.scss"
import pp from "../../img/pp.jpeg"
import People from '../People/People';

let suggestions=[
    {id:1,name:"Abhishek kumar",img:pp},
    {id:2,name:"Manish Kumar",img:pp}
]
let lastActivities=[
    {id:1,name:"Harsh rawat",img:pp,time:"1 min ago"},
    {id:1,name:"Vivek kuswat",img:pp,time:"1 min ago"},
    {id:1,name:"Ravindra pati",img:pp,time:"1 min ago"},
    {id:1,name:"Puran dholi",img:pp,time:"1 min ago"},
]
let onlineFriends=[
    {id:1,name:"Raj singh",img:pp},
    {id:1,name:"Bablu",img:pp},
    {id:1,name:"Rahul sah",img:pp},
    {id:1,name:"Snehit singh",img:pp},
]
function Rightbar(props) {
    return (
        <div className='rightbar'>
            <div className='top'>
            <label>Suggestions for You</label>
                {suggestions.map((data)=><People key={data.id} name={data.name} img={data.img} label="suggestions"/>)}
            </div>
            <div className='center'>
            <label>Last Activity</label>
                {lastActivities.map((data)=><People key={data.id} name={data.name} img={data.img} time={data.time} label="lastActivities"/>)}
            </div>
            <div className='bottom'>
                <label>Online Friends</label>
            {onlineFriends.map((data)=><People key={data.id} name={data.name} img={data.img} label="onlineFriends"/>)}
            </div>
        </div>
    );
}

export default Rightbar;