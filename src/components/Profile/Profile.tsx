import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <h2>Profile</h2>
            <div>Avatar + user Info</div>
            <MyPosts/>
        </div>
    );
};