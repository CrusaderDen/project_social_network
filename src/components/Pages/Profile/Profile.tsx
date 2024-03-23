import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {PostsType} from "../../../redux/state";

type ProfilePropsType = {
    posts: PostsType
    addPost: (v: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};


