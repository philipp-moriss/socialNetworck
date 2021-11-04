import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';
import {PATH} from "../../App";


const Navbar = () => {

    const [open, setOpen] = useState(false)
    const onDoubleClickHandler = () => {
        setOpen(true)
    }
    const onClickHandler = () => {
        setOpen(false)
    }
    const AcauntIMG = open ? <div>
        <img className={style.imgFriends} alt={'account'}
             src={'http://eran.geek.co.il/wp-content/uploads/2005/11/South%20Park%20Avatar1.jpg'}/>
        <img className={style.imgFriends} alt={'account'}
             src={'https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651'}/>
        <img className={style.imgFriends} alt={'account'}
             src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyhjuXjpN5uFiBSWPBOwkKbdCTmGD34EvR1TkdG17jTfK3km8K1CMmrbEZ7__tOrt-PU&usqp=CAU'}/>
    </div> : null

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={PATH.PROFILE} activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.DIALOGS} activeClassName={style.active}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.NEWS} activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.MUSIC} activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.SETTINGS} activeClassName={style.active}>Setings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={PATH.FRIENDS}
                         onClick={onClickHandler}
                         onDoubleClick={onDoubleClickHandler}
                         activeClassName={style.active}>Friends</NavLink>
                {AcauntIMG}
            </div>
            <div className={style.item}>
                <NavLink to={PATH.USERS} activeClassName={style.active}>Users</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;
