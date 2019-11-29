import React from 'react';
import {connect} from "react-redux";
import NavBar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    state: state.sideBar,
  }
};

const NavBarContainer = connect(mapStateToProps)(NavBar);
export default NavBarContainer;