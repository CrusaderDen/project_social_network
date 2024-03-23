// types----------
import {rerenderApplication, saveData} from "../index";

type DialogType = {
    id: number
    name: string
    active: boolean
}
type MessageType = {
    id: number
    message: string
}
type PostType = {
    id: number,
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: PostType[]
}
type messagesPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type DialogsType = DialogType[]
export type MessagesType = MessageType[]
export type PostsType = PostType[]
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: messagesPageType
}

// state----------
export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi kaban', likesCount: 2},
            {id: 2, message: 'Privet-privet!!!', likesCount: 5},
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Denis', active: false},
            {id: 2, name: 'Katya', active: true},
            {id: 3, name: 'Julia', active: false},
            {id: 4, name: 'Alexandra', active: false},
        ],
        messages: [
            {id: 1, message: 'Kak dela?'},
            {id: 2, message: 'Spasibo, horosho'},
            {id: 3, message: 'Nu i otlichno'},
            {id: 4, message: 'Hochu lejat'},
        ],
    }
}

export const addPost = (postMessage: string) => {
    const newPost = {id: state.profilePage.posts.length + 1, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    saveData(state)
    rerenderApplication()
}
//----------