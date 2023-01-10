import Post from "../component/post/Post";
import postOne from "../img/postOne.jpeg"

export default {
    title:"Post",
    component:Post,
    parameters:{
        layout: 'fullscreen',
    }
}

const Template = (args) => <Post {...args} />;

export const editPost = Template.bind({});
editPost.args = {
    data:{
        id:1,
        desc:"some description one",
        mediaType:"image",
        img:postOne,
        user:{name:"Rohit",time:"a few second ago"}
    }
};