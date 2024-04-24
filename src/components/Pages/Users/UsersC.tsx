import React from 'react';
import axios from "axios";
import ava_default from './../../../assets/images/user.svg'
import s from './Users.module.css'

export class UsersC extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: Array<any> = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={s.paginationContainer}>
                {pages.map(p => <span onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>)}
            </div>
            {
                this.props.users.map((u: any) => <div style={{display: 'flex', gap: '100px', marginBottom: '50px', border: '5px inset black'}} key={u.id}>
                        <div className={s.usersContainer}>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : ava_default} alt="avatar"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unFollow(u.id)}>Подписаться</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Отписаться</button>}
                            </div>
                        </div>
                        <div className={s.userInfoBlock}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.userInfoBlockLocation}>
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