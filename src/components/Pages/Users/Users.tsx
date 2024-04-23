import React from 'react';
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";
import ava_default from './../../../assets/images/user.svg'


// [
//     {
//         id: 1,
//         photoUrl: 'https://cdnn21.img.ria.ru/images/150475/80/1504758010_286:0:2558:1704_1920x0_80_0_0_ff486b4356a5defcb42d0fb545434d03.jpg',
//         followed: true,
//         fullName: 'Вован',
//         status: 'В деревне хорошо!',
//         location: {city: 'Волгореченск', country: 'Россия'}
//     },
//     {
//         id: 2,
//         photoUrl: 'https://lh6.googleusercontent.com/proxy/Ogb5M9otVeV6vSBnpqhuJuv7EWM-swUacKQHrYOwljc8rtM4tqBT-OdolwEa0rZTtJhkrB8SRi24Rd5BqlRTDodfZTaKPZr3a2XK5eUG3GXWtcwVrpuV4AJZZ9s8udT6tGXzVo5zqK70z19jeATEAAsOP-9n8kzmNgoOFRnIiaOULAQ-rQ',
//         followed: false,
//         fullName: 'Санёк',
//         status: 'Я в запаре',
//         location: {city: 'Иваново', country: 'Россия'}
//     },
//     {
//         id: 3,
//         photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/10315851/pub_64807bb6db808c49ba10b163_64807c66d7291f01e9f7bafa/scale_1200',
//         followed: true,
//         fullName: 'Диман',
//         status: 'Инкубатор-топ',
//         location: {city: 'Иваново', country: 'Россия'}
//     },
// ]


export const Users = (props: UsersPagePropsType) => {

    const getUser = () => {
        if (props.users.length === 0) {
//0560c313-8e01-44e8-b3a8-970fcfb3c17e
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }

    }


    return (
        <div>
            <button onClick={getUser}>Получить юзеров</button>
            {
                props.users.map((u) => <div style={{display: 'flex', gap: '100px', marginBottom: '50px', border: '5px inset black'}} key={u.id}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <div>
                                <img style={{width: '150px', height: "auto"}} src={u.photos.small !== null ? u.photos.small : ava_default} alt="avatar"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unFollow(u.id)}>Подписан</button>
                                    : <button onClick={() => props.follow(u.id)}>Не подписан</button>}
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div style={{display: 'flex', gap: '30px'}}>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};