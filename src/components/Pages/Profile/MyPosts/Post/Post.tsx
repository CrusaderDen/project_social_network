import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div>{props.message}</div>
            <span>Likes: {props.likesCount}</span>
        </div>
    );
};