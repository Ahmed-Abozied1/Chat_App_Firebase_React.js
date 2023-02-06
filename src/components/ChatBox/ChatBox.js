import React from "react";
import Message from "../Message/Message";
import SendMessage from "../SendMessage/SendMessage";
import "./ChatBox.css"
const ChatBox = () => {
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <Message />
      </div>
      <SendMessage />
    </main>
  );
};

export default ChatBox;
