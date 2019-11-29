import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const NavBar = (props) => {
  let siteBarItem = props.state.user.map((user) => <SideBar name={user.name} img={user.img}/>);

  return (
      <div className={style.navBar}>
        <div className={style.item}>
          <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/news" activeClassName={style.active}>News</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/users" activeClassName={style.active}>Find Users</NavLink>
        </div>
        <div className={style.titleSideBar}>
          Friends
        </div>
        <div className={style.SideBar}>

          {siteBarItem}

        </div>
      </div>
  );
};
export default NavBar;