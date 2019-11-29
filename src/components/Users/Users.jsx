import React from 'react';
import style from './Users.module.css';
import avatar from "../../accets/images/avatar.png"
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <div className={style.container}>

          <div className={style.item}>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small ? u.photos.small : avatar} alt=""/>
            </NavLink>

            {u.followed ?

                <button className={style.addBtn} onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {withCredentials: true,
                    headers:{
                      "API-KEY":"08a3dfd3-4140-442d-93c6-f70ce7070de6",
                    }})
                    .then(response => {
                      if(response.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                    });
                }}>Unfollow</button> :


                <button className={style.addBtn} onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials:true,
                    headers:{
                      "API-KEY":"08a3dfd3-4140-442d-93c6-f70ce7070de6",
                    }
                  })
                      .then(response => {
                        if(response.data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      });
                }}>Follow</button>}
          </div>

          <div className={style.items}>

            <div className={style.fullName}>{u.name}</div>
            <div className={style.status}>{u.status}</div>

            <div className={style.location}>
              <div>{'u.location.country'},</div>
              <div>{'u.location.city'}</div>
            </div>
          </div>
        </div>
      </div>)
    }

    <button className={style.btnShowMore}>show more
    </button>
    <div className={style.pagesButtons}>
      <ul className={style.pages}>
        {pages.map(p => <li className={props.currentPage === p && style.active} onClick={() => {
          props.onPageChange(p);
        }}>{p}</li>)}

      </ul>
    </div>
  </div>

};
export default Users;

