import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={'/Profile'} activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/Dialogs'} activeClassName={style.active}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/News'} activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/Music'} activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/Setings'} activeClassName={style.active}>Setings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;
