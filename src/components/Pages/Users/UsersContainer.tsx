import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../../redux/users-reducer";


type MapStateToPropsType = {
    users: UserType[]
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowAC(userId)),
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export type UsersPagePropsType = MapStateToPropsType & MapDispatchToPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)