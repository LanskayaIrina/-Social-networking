import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from './redax/redux-store';
import {Provider} from "react-redux";
import {Observable as subscribe} from "redux";


// let rerenderTree = () => {

  ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>,
      document.getElementById('root'));
//};

// rerenderTree();
// store.subscribe( () => rerenderTree());

