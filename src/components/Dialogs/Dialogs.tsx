import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";


type DialogsPropsType = {}

type dialogsDataType = {
    id: number
    name: string
    active: boolean
}[]

type messagesDataType = {
    id: number
    message: string
}[]

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsData: dialogsDataType = [
        {id: 1, name: 'Denis', active: false},
        {id: 2, name: 'Katya', active: true},
        {id: 3, name: 'Julia', active: false},
        {id: 4, name: 'Alexandra', active: false},
    ]
    const messagesData: messagesDataType = [
        {id: 1, message: 'Kak dela?'},
        {id: 2, message: 'Spasibo, horosho'},
        {id: 3, message: 'Nu i otlichno'},
        {id: 4, message: 'Hochu lejat'},
    ]
    return (
        <div>
            <h2 className={'pageTitle'}>Dialogs</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsData.map(i => <DialogItem key={i.id} name={i.name} id={i.id} active={i.active}/>)}
                </div>
                <div className={s.messages}>
                    {messagesData.map(i => <Message key={i.id} messageText={i.message}/>)}
                </div>
            </div>
        </div>
    );
};

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


type MessagePropsType = {
    messageText: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div>
            <div className={s.message}>{props.messageText}</div>
        </div>
    );
};