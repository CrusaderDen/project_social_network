import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

export type DialogType = {
    id: number
    name: string
    active: boolean
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number,
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type messagesPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}
export type DialogsType = DialogType[]
export type MessagesType = MessageType[]
export type PostsType = PostType[]
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: messagesPageType
}


export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi kaban', likesCount: 2},
                {id: 2, message: 'Privet-privet!!!', likesCount: 5},
            ],
            newPostText: ''
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
            newMessageBody: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(any: any): any {
        console.log('State was changed')
    },
    subscribe(observer: (any: any) => any) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this.getState())
    }
}
