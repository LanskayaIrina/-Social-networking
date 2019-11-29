import React from 'react';
import style from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
  let path = '/dialogs/'+props.id;
  return (
      <div className={style.dialog}>
        <img src={props.img} alt=""/>
        <NavLink to={path} activeClassName={style.active}>
          {props.name}
        </NavLink>
      </div>
  )
};
export default Dialog;