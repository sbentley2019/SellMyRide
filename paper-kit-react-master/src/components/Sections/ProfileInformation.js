import React from "react";

export default function ProfileInformation(props) {
  return (
    <div>
      <hr />
      <p>name: {props.data.name}</p>
      <hr />
      <p>email: {props.data.email}</p>
      <hr />
      <p>location: {props.data.location}</p>
      <hr />
      <p>phone: {props.data.phone}</p>
      <hr />
    </div>
  );
}
