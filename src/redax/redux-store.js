import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducers from "./users-reducer";
import authReducer from "./auth-reducer";



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducers,
  auth: authReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;