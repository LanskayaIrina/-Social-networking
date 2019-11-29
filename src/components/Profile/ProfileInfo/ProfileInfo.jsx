import React from 'react';

import style from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
  return (
      <div className={style.profileInfo}>
        <div>
          <img src={props.profile.photos.large ? props.profile.photos.large : null} alt=""/>

          {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4Y_m6SbMztUGALvkh5HQ5lMzuxVPY4Bu6YGmsL8PrV9i8_gDIw" alt=""/>*/}
          {/*<span>Irina Lanskaya</span>*/}
          <span>{props.profile.fullName}</span>
          <div>About me: {props.profile.aboutMe}</div>
        </div>

      </div>
  )
};
export default ProfileInfo;