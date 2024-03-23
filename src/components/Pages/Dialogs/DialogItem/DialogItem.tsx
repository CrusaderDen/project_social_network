import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
    active: boolean
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={props.active ? `${s.dialog} ${s.active}` : s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

