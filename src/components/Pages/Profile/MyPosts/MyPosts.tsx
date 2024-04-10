import React, {ChangeEvent, useRef} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType} from "../../../../redux/store";

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostsType
    newPostText: string
}


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    function onAddPost() {
        props.addPost()
    }

    return (
        <div>
            <div>
                <div>
                    <textarea rows={5} cols={40} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button className={s.addPostButton} onClick={onAddPost}>Add post</button>
                <div>New post</div>
            </div>
            <div>{postsElements}</div>
        </div>
    );
};