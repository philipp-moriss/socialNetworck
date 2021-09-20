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
            <div className={style.item}>
                <NavLink to={'/Friends'} activeClassName={style.active}>Friends<div>
                    <img src={'http://eran.geek.co.il/wp-content/uploads/2005/11/South%20Park%20Avatar1.jpg'}/>
                    <img src={'https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651'}/>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyhjuXjpN5uFiBSWPBOwkKbdCTmGD34EvR1TkdG17jTfK3km8K1CMmrbEZ7__tOrt-PU&usqp=CAU'}/>
                </div></NavLink>
            </div>
        </nav>
    )
};

export default Navbar;
