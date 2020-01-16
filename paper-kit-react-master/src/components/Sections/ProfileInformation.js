import React from "react";

export default function ProfileInformation(props) {
  return (
    <div>
      <hr />
      <p><h5><b>Username:</b> {props.data.name}</h5></p>
      <hr />
      <p><h5><b>Email:</b> {props.data.email}</h5></p>
      <hr />
      <p><h5><b>Location:</b> {props.data.location}</h5></p>
      {/* <hr />
      <p>phone: {props.data.phone}</p> */}
      <hr />
    </div>
  );
}
