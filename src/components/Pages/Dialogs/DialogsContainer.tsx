import {messagesPageType, sendMessageAC, updateNewMessageBodyAC} from "../../../redux/messages-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    messagesPage: messagesPageType
}

const mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage
    }
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)