import React from 'react';
import "./post.scss"
import pp from  "../../img/pp.jpeg"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

function Post({data}) {
    return (
        <div className='profile-user-post'>
            <div className='top'>
                <div className='user-details'>
                
                    <Link to={`/profile/${data.id}`}><img src={pp}/></Link>
                <div className='user-info'>
                    <strong>{data.user.name}</strong>
                    <span>{data.user.time}</span>
                </div>
                </div>
           
                <div className='icon'>...</div>
            </div>
            <div className='center'>
                <p>{data.desc}</p>
            </div>
            <div className='bottom'>
                <img src={data.img}/>
            </div>
        </div>
    );
}

// Post.PropTypes={


// }

export default Post;