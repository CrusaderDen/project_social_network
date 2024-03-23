import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType
    addPost: (v: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    function onChangeHandler() {
    }

    function addPost() {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ''
        }
    }

    return (
        <div>
            <div>
                <div>
                    <textarea rows={5} cols={40} onChange={onChangeHandler} ref={newPostElement}></textarea>
                </div>
                <button className={s.addPostButton} onClick={addPost}>Add post</button>
                <div>New post</div>
            </div>
            <div>{postsElements}</div>
        </div>
    );
};