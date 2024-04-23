import React from 'react';
import axios from "axios";
import ava_default from './../../../assets/images/user.svg'

export class UsersC extends React.Component<any, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map((u: any) => <div style={{display: 'flex', gap: '100px', marginBottom: '50px', border: '5px inset black'}} key={u.id}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <div>
                                <img style={{width: '50px', height: "auto"}} src={u.photos.small !== null ? u.photos.small : ava_default} alt="avatar"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unFollow(u.id)}>Подписаться</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Отписаться</button>}
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
    }
}