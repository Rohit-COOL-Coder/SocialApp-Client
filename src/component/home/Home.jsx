import React from 'react';
import "./home.scss"
import postOne from "../../img/postOne.jpeg"
import Post from '../post/Post';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import Story from '../Story/Story';
import pp from "../../img/pp.jpeg"

let story=[
    {id:1,name:"Manish kumar",img:pp},
    {id:2,name:"Vivek kuswa",img:pp},
    {id:3,name:"Puran dholi",img:pp},
    {id:4,name:"Ravindhra",img:pp},
    {id:5,name:"Abhishek",img:pp},
    {id:6,name:"Snehit singh",img:pp}
]

let userPost=[
    {id:1,desc:"some description one",mediaType:"image",img:postOne,user:{name:"Rohit",time:"a few second ago"}},
    {id:2,desc:"some description two",mediaType:"image",img:postOne,user:{name:"Rohit",time:"a few second ago"}},
    {id:3,desc:"some description three",mediaType:"image",img:postOne,user:{name:"Rohit",time:"a few second ago"}}
]
function Home(props) {
    return (
        <div className='home'>
            
            <div className='storySlider'>
                <Swiper
            slidesPerView={4}
            spaceBetween={-25}
            freeMode={true}
            // pagination={{
            // clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            {story.map((data)=><><SwiperSlide><Story key={data.id} data={data}/></SwiperSlide></>)}
                </Swiper>
            </div>

               {userPost.map((data)=><Post key={data.id} data={data}/>)}
            
        </div>
    );
}

export default Home;