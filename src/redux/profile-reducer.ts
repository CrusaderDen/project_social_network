export type PostType = {
    id: number,
    message: string
    likesCount: number
}
export type PostsType = PostType[]
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi kaban', likesCount: 2},
        {id: 2, message: 'Privet-privet!!!', likesCount: 5},
    ],
    newPostText: ''
}


export type ProfileActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT : {
            return {...state, newPostText: action.newText}
        }
        default:
            return {...state}
    }
}

export const addPostAC = () => ({
    type: ADD_POST
}) as const

export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const