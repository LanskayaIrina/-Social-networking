import React from 'react';
import './App.module.css';
import style from './App.module.css';
import './components/Header/Header';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavbarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {

  return (
      <div className={style.appWrapper}>
        <HeaderContainer/>
        <NavBarContainer />
        <div className={style.wrapperContent}>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/users' render={() => <UsersContainer />}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>

          <Route path='/settings' render={() => <Settings/>}/>
        </div>
      </div>
  )
};

export default App;
