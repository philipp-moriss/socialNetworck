import React from "react";
import style from "./Users.module.css"
import {user, UsersType} from "../../redux/reducer/Users.reducer";


type  UserTypeProps = {
    totalUsersCount: number;
    pageSize: number;
    users: user[];
    unfollow: (id: number) => void;
    follow: (id: number) => void;
    onPageChange: (page: number) => void;
    currentPage: number;
}

function Users(props: UserTypeProps) {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.item}>

            <div className={style.users}>
                {
                    props.users.map((element) => <div key={element.id}>

                        <span>
                            <div>
                                <img
                                    src={element.photos.small ? element.photos.small : "https://i.pinimg.com/originals/a2/ec/c6/a2ecc63ed9e51495ead40e95d92ac9b3.jpg"}
                                    alt={"user"}/>
                            </div>
                            <div>
                                {element.followed ?
                                    <button onClick={() => props.unfollow(element.id)}>unfollow</button>
                                    : <button onClick={() => props.follow(element.id)}>follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{element.name}</div>
                                <div>{element.status}</div>
                            </span>
                        </span>


                    </div>)
                }
            </div>
            <div className={style.pages}>

                {pages.map((pages, index) => {
                    if (pages <= 30) {
                        return <span onClick={() => props.onPageChange(pages)}
                                     className={props.currentPage === pages ? style.itemSelected : style.itemNotSelected}
                                     key={index}>{pages}</span>
                    }

                })}
            </div>
        </div>);
}

export default Users;