import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

import MessageItem from "components/Sections/MessageItem.js";
import MessageRow from "components/Sections/MessageRow.js";

export default function ProfileMessages(props) {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentMessages, setCurrentMessages] = useState([]);

  useEffect(() => {
    axios.get(`/api/messages/${props.userid}`).then(res => {
      console.log("senders", res.data);
      res.data.map(person =>
        axios
          .get(`/api/messages/${props.userid}/${person.user_id}`)
          .then(res => {
            console.log("conversations", res.data);
            const messages = [];
            for (let i in res.data) {
              messages.push(<MessageItem key={i} messageData={res.data[i]} />);
            }
            setMessages([...messages, { conv: messages }]);
            const sender = res.data[res.data.length - 1];
            if (sender.user_id != props.userid) {
              setCurrentMessages([
                ...currentMessages,
                {
                  sender: sender.user_id,
                  message: sender.message,
                  time: sender.timestamp
                }
              ]);
            }
          })
      );
    });
  }, []);
  console.log("before map", currentMessages);
  const messageComponent = currentMessages.map(message => {
    console.log("aaaaa", message);
    return <MessageRow message={message} />;
  });
  return (
    <div>
      <h3>Your inbox is empty!</h3>
      <ul className="list-unstyled follows">{messageComponent}</ul>
    </div>
  );
}
