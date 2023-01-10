import React from 'react';
import "./profile.scss"
import bg from "../../img/bg.jpeg"
import pp from "../../img/pp.jpeg"
import postOne from "../../img/postOne.jpeg"
import Post from '../post/Post';


let userPost=[
    {id:1,desc:"some description one",mediaType:"image",img:postOne,user:{name:"Rohit",time:"a few second ago"}},
    {id:2,desc:"some description two",mediaType:"image",img:postOne,user:{name:"Rohit",time:"a few second ago"}},
    {id:3,desc:"some description three",mediaType:"image",img:postOne,user:{name:"Rohit",time:"a few second ago"}}
]


function Profile(props) {
    return (
        <div className='profile'>
            <img className='profile-user-bgimg' src={bg}/>
            <div className='profile-user-info'>
                <img src={pp}/>
            </div>
            {userPost.map((val)=><Post key={val.id} data={val}/>)}
            
        </div>
    );
}

export default Profile;