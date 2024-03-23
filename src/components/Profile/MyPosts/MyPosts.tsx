import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                <div><textarea rows={5} cols={40}></textarea></div>
                <button>Add post</button>
                <div>New post</div>
            </div>
            <div>
                <Post message={'Hi kaban'} likesCount={5}/>
                <Post message={'Privet-privet!!!'} likesCount={20}/>
            </div>
        </div>
    );
};