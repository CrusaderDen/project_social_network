import React from 'react';
import s from './../Dialogs.module.css'

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