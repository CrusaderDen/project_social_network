import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {messagesPageType} from "../../../redux/store";


type DialogsPropsType = {
    updateNewMessageBody: any
    sendMessage: any
    messagesPage: messagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.messagesPage.dialogs.map(
        (i: { id: number; name: string; active: boolean; }) => <DialogItem key={i.id} name={i.name} id={i.id} active={i.active}/>)
    const messagesElements = props.messagesPage.messages.map(
        (i: { id: number; message: string; }) => <Message key={i.id} messageText={i.message}/>)

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div>
            <h2 className={'pageTitle'}>Dialogs</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea
                                placeholder={'Enter your message'}
                                value={props.messagesPage.newMessageBody}
                                onChange={onNewMessageChange}
                            >
                            </textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
