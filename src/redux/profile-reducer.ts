import {ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi kaban', likesCount: 2},
        {id: 2, message: 'Privet-privet!!!', likesCount: 5},
    ],
    newPostText: ''
}


export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            const stateCopy = {...state, posts: [...state.posts]}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT : {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return {...state}
    }
}

export const addPostAC = () => ({
    type: ADD_POST
})

export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})