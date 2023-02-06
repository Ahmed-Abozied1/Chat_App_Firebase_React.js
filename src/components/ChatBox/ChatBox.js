import React from "react";
import Message from "../Message/Message";
import SendMessage from "../SendMessage/SendMessage";
import { useEffect, useState, useRef } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import "./ChatBox.css";
import { db } from "../../firebase";
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const firebaseQuery = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const subscribe = onSnapshot(firebaseQuery, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => subscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
