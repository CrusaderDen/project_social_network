import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {postsDataType} from "../../../../index";

type MyPostsPropsType = {
    posts: postsDataType
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    return (
        <div>
            <div>
                <div><textarea rows={5} cols={40}></textarea></div>
                <button className={s.addPostButton}>Add post</button>
                <div>New post</div>
            </div>
            <div>{postsElements}</div>
        </div>
    );
};