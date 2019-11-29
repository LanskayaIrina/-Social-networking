import React from 'react';
import style from './Sidebar.module.css';


const SideBar = (props) => {

  return (
      <div className={style.item}>
        <div><img src={props.img} alt=""/></div>
        {props.name}
      </div>
  );
};
export default SideBar;