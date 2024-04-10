import React, {ChangeEvent, useRef} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType} from "../../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
    dispatch: any
}


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))
    }

    function addPost() {
        props.dispatch(addPostAC())
    }

    return (
        <div>
            <div>
                <div>
                    <textarea rows={5} cols={40} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button className={s.addPostButton} onClick={addPost}>Add post</button>
                <div>New post</div>
            </div>
            <div>{postsElements}</div>
        </div>
    );
};