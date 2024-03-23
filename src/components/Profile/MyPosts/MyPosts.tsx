import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'


type postsDataType = {
    id: number,
    message: string
    likesCount: number
}[]

export const MyPosts = () => {
    const postsData: postsDataType = [
        {id: 1, message: 'Hi kaban', likesCount: 2},
        {id: 2, message: 'Privet-privet!!!', likesCount: 5},
    ]
    return (
        <div>
            <div>
                <div><textarea rows={5} cols={40}></textarea></div>
                <button className={s.addPostButton}>Add post</button>
                <div>New post</div>
            </div>
            <div>
                {postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
};