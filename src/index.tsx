import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// types----------

export type dialogsDataType = {
    id: number
    name: string
    active: boolean
}[]

export type messagesDataType = {
    id: number
    message: string
}[]

export type postsDataType = {
    id: number,
    message: string
    likesCount: number
}[]

// state----------

const dialogs: dialogsDataType = [
    {id: 1, name: 'Denis', active: false},
    {id: 2, name: 'Katya', active: true},
    {id: 3, name: 'Julia', active: false},
    {id: 4, name: 'Alexandra', active: false},
]
const messages: messagesDataType = [
    {id: 1, message: 'Kak dela?'},
    {id: 2, message: 'Spasibo, horosho'},
    {id: 3, message: 'Nu i otlichno'},
    {id: 4, message: 'Hochu lejat'},
]

const posts: postsDataType = [
    {id: 1, message: 'Hi kaban', likesCount: 2},
    {id: 2, message: 'Privet-privet!!!', likesCount: 5},
]
//----------

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
    document.getElementById('root')
);