import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navItem}><NavLink activeClassName={s.active} to="/users">Users</NavLink></li>
                <li className={s.navItem}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></li>
                <li className={s.navItem}><NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink></li>
                <li className={s.navItem}><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
                <li className={s.navItem}><NavLink activeClassName={s.active} to="/music">Music</NavLink></li>
                <li className={s.navItem}><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>

    );
};