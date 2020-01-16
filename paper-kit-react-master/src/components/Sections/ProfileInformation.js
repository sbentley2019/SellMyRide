import React from "react";

export default function ProfileInformation(props) {
  return (
    <div>
      <hr />
      <p><h4>Username: {props.data.name}</h4></p>
      <hr />
      <p><h4>Email: {props.data.email}</h4></p>
      <hr />
      <p><h4>location: {props.data.location}</h4></p>
      {/* <hr />
      <p>phone: {props.data.phone}</p> */}
      <hr />
    </div>
  );
}
