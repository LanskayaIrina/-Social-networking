import React from 'react';
import './Header.module.css';
import style from './Header.module.css';
import logo from "./logo.svg";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
      <div className={style.header}>
        <img src={logo} className={style.AppLogo} alt="logo"/>
        <div className={style.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

        </div>
      </div>

  )
};
export default Header;