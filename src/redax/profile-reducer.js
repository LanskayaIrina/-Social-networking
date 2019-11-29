const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'Hi', like: 2},
    {id: 2, message: 'how are you?', like: 5},
    {id: 3, message: 'Splendid', like: 4},
    {id: 4, message: 'Cool', like: 2},
    {id: 5, message: 'Yoo'},
    {id: 6, message: 'yahoo', like: 28},
  ],
  newPostText: '',
  profile: null
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.textPost
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updatePostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, textPost: text});
export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;