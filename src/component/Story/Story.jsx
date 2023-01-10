import React from 'react';
import "./Story.scss"


function Story({data}) {
    return (
        <div className='story'>
            <img src={data.img}/>
            <p>{data.name}</p>
        </div>
    );
}

export default Story;