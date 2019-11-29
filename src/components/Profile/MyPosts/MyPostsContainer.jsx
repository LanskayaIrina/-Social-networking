import React from 'react';
import {addPostCreator, updatePostCreator} from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*
const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onPostChange = (text) => {
    let action = updatePostCreator(text);
    props.store.dispatch(action);
  };


  return (
      <div>
        <MyPosts addPost={onAddPost}
                 updateNewPostText={onPostChange}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
      </div>
  )
};
*/
let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};
let mapDispatchToPops = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updatePostCreator(text))
    }
  }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToPops)(MyPosts);
export default MyPostsContainer;