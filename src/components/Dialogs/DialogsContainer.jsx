import React from 'react';
import {sendMessageCreator, updateMessageTextCreator} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageCreator()),
    MessageChange: (text) => dispatch(updateMessageTextCreator(text)),
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;