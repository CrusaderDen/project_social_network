import React from 'react';
import logo from "../assets/logo.svg";

export const Navbar = () => {
    return (
        <div className={'navbar'}>
            <img src={logo} alt="crusader's social network"/>
            <nav>
                <ul>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Messages</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Music</a></li>
                </ul>
                <ul>
                    <li><a href="">Settings</a></li>
                </ul>
            </nav>
        </div>
    );
};