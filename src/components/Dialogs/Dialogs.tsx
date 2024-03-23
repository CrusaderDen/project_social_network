import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsPropsType = {}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div>
            <h2 className={'pageTitle'}>Profile</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    <DialogItem name={'Denis'} id={1}/>
                    <DialogItem name={'Katya'} id={2} active={true}/>
                    <DialogItem name={'Julia'} id={3}/>
                    <DialogItem name={'Alexandra'} id={4}/>
                </div>
                <div className={s.messages}>
                    <Message messageText={'Kak dela?'}/>
                    <Message messageText={'Spasibo, horosho'}/>
                    <Message messageText={'Nu i otlichno'}/>
                </div>
            </div>
        </div>
    );
};

type DialogItemPropsType = {
    name: string
    id: number
    active?: boolean
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