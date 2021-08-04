import React from 'react' ;
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a>profile</a>
            </div>
            <div className={style.item}>
                <a>massage</a>
            </div>
            <div className={style.item}>
                <a>news</a>
            </div>
            <div className={style.item}>
                <a>music</a>
            </div>
            <div className={style.item}>
                <a>setings</a>
            </div>
        </nav>
    )
};

export default  Navbar ;
