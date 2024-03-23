import React from 'react';
import s from './Navbar.module.css'
import {Link} from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navItem}><Link to="/profile">Profile</Link></li>
                <li className={s.navItem}><Link to="/dialogs">Messages</Link></li>
                <li className={s.navItem}><Link to="/news">News</Link></li>
                <li className={s.navItem}><Link to="/music">Music</Link></li>
                <li className={s.navItem}><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>

    );
};