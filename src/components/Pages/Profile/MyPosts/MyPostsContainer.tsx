import {addPostAC, PostsType, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    newPostText: string
    posts: PostsType
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)