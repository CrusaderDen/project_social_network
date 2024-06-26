const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type UsersPageType = {
    users: UserType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: UsersPageType = {
    // users: [
    // {
    //     id: 1,
    //     photoUrl: 'https://cdnn21.img.ria.ru/images/150475/80/1504758010_286:0:2558:1704_1920x0_80_0_0_ff486b4356a5defcb42d0fb545434d03.jpg',
    //     followed: true,
    //     fullName: 'Вован',
    //     status: 'В деревне хорошо!',
    //     location: {city: 'Волгореченск', country: 'Россия'}
    // },
    // {
    //     id: 2,
    //     photoUrl: 'https://lh6.googleusercontent.com/proxy/Ogb5M9otVeV6vSBnpqhuJuv7EWM-swUacKQHrYOwljc8rtM4tqBT-OdolwEa0rZTtJhkrB8SRi24Rd5BqlRTDodfZTaKPZr3a2XK5eUG3GXWtcwVrpuV4AJZZ9s8udT6tGXzVo5zqK70z19jeATEAAsOP-9n8kzmNgoOFRnIiaOULAQ-rQ',
    //     followed: false,
    //     fullName: 'Санёк',
    //     status: 'Я в запаре',
    //     location: {city: 'Иваново', country: 'Россия'}
    // },
    // {
    //     id: 3,
    //     photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/10315851/pub_64807bb6db808c49ba10b163_64807c66d7291f01e9f7bafa/scale_1200',
    //     followed: true,
    //     fullName: 'Диман',
    //     status: 'Инкубатор-топ',
    //     location: {city: 'Иваново', country: 'Россия'}
    // },
//     ]
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: any): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)}
        case UNFOLLOW:
            return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)}
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return {...state}
    }
}


export const followAC = (userId: number) => ({
    type: 'FOLLOW',
    userId: userId
}) as const

export const unFollowAC = (userId: number) => ({
    type: 'UNFOLLOW',
    userId: userId
}) as const

export const setUsersAC = (users: UserType[]) => ({
    type: 'SET_USERS',
    users
}) as const

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
}) as const