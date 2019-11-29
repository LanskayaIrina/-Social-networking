import React from 'react';
import preloader from "../../../accets/images/preloader.svg";
import style from "../../Users/Users.module.css";

let Preloader = () => {
  return <>

    <img src={preloader} className={style.preloader}/>
  </>
};


export default Preloader;