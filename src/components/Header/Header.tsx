import React from 'react';
import logo from "../../assets/logo.svg";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="crusader's social network"/>
            <h1>Social Network by Crusader & Dimych: OPENING SOON!!!!</h1>
            <img src={logo} alt="crusader's social network"/>
        </header>
    );
};