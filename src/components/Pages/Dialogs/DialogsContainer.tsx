import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/messages-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)