import React from "react";

export default function MessageItem(props) {
  return (
    <li>
      {props.messageData.message} {props.messageData.sender}
    </li>
  );
}
