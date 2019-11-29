import React from 'react';
import style from './Messages.module.css';

const Messages = (props) => {

  return (
      <div className={style.messages}>
        <div>{props.message}</div>
      </div>
  )
};
export default Messages;