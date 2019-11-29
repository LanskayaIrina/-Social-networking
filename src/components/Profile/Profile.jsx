import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/Preloader";



const Profile = (props) => {
if (!props.profile) {
  return <Preloader/>
}
  return (
      <div className={style.profile}>
        <div className={style.profileImg}>
          <img
              // src={props.profile.photos.large ? props.profile.photos.large : null}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSH87jjzGQzTZL9A3sen6KBrdnQrHIwQpE9fjlehHwaHtVC3NCw"
              alt=""/>
        </div>
        <ProfileInfo profile={props.profile}/>
        <h3>
          My post
        </h3>
        <MyPostsContainer />
      </div>
  )
};
export default Profile;