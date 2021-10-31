import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css' ;
import {PATH} from "../../App";
import Preloader from "../common/Preoalder/Preloader";

type HeaderPropsType = {
    login: null | string;
    isAuth : boolean | null;
    isFetching: boolean | null;
}

const Header = (props:HeaderPropsType) => {
    return (<header className={style.header}>
        <div className={style.labelDiv}>
        <img alt={'label'} src='https://findicons.com/files/icons/1267/futurama_vol_4_the_robots/256/downgraded_bender.png'/>
        </div>

        {props.isFetching ? <div className={style.Preloader}><Preloader/></div>
            : <div className={style.LoginBlock}>
            {props.isAuth ? props.login : <NavLink to={PATH.AUTH} className={style.item}>Login</NavLink>
            }
        </div>}

        </header>)
};

export default  Header;