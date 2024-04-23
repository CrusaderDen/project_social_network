const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type UsersPageType = {
    users: UserType[]
}

const initialState: UsersPageType = {
    users: [
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
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: any): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)}
        case UNFOLLOW:
            return {...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
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