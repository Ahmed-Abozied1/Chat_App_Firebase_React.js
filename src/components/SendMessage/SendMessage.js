import React from "react";
import "./SendMessage.css"
function SendMessage() {
  return (
    <form className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter your message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
