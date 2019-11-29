import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsElements = props.posts
      .map(post => <Post message={post.message} like={post.like}/>);

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };


  return (
      <div className={style.item}>
        <textarea cols="30" rows="5"
                  onChange={onPostChange}
                  value={props.newPostText}/>
        <div className={style.button}>
          <button onClick={onAddPost}>Add post
          </button>
        </div>
        <div>
          {postsElements}
        </div>
      </div>
  )
};
export default MyPosts;