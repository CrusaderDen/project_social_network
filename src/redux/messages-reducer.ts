const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const messagesReducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.newMessageBody = ''
            const newMessage = {
                id: state.messages.length + 1,
                message: body
            }
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}


export const updateNewMessageBodyAC = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})
export const sendMessageAC = () => ({type: SEND_MESSAGE})