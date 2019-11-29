import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

  let dialogsElement = props.dialogPage.dialogs.map(d => <Dialog name={d.name} id={d.id} img={d.img}/>);
  let messageElement = props.dialogPage.messages.map(m => <Messages message={m.message}/>);

  let onAddMessage = () => {
    props.sendMessage();
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.MessageChange(text);
  };

  return (
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>
          <h4>
            Dialogs
          </h4>
          {dialogsElement}
        </div>
        <div className={style.dialogsMessages}>
          <h4>
            Messages
          </h4>
          {messageElement}
          <textarea placeholder='Enter your message'
                    onChange={onMessageChange}
                    value={props.dialogPage.newMessageText}/>
          <div>
            <button onClick={onAddMessage}>Send message</button>
          </div>
        </div>
      </div>
  )
};
export default Dialogs;