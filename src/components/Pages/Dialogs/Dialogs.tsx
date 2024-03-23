import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../../redux/state";


type DialogsPropsType = {
    dialogs: DialogsType
    messages: MessagesType
}

export const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.dialogs.map(i => <DialogItem key={i.id} name={i.name} id={i.id} active={i.active}/>)
    const messagesElements = props.messages.map(i => <Message key={i.id} messageText={i.message}/>)


    return (
        <div>
            <h2 className={'pageTitle'}>Dialogs</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>{messagesElements}</div>
            </div>
        </div>
    );
};
