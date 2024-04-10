import {messagesPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState: messagesPageType = {
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

export const messagesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            const body = state.newMessageBody
            console.log(body)
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            }
        default:
            return {...state}
    }
}


export const updateNewMessageBodyAC = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})
export const sendMessageAC = () => ({type: SEND_MESSAGE})