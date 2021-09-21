import React from 'react';
import style from './header.module.css' ;

const Header = () => {
    return (<header className={style.header}>
        <div className={style.labelDiv}>
        <img alt={'label'} src='https://findicons.com/files/icons/1267/futurama_vol_4_the_robots/256/downgraded_bender.png'/>
        </div>
        </header>)
};

export default  Header;