import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Create</NavLink>
      <NavLink to="/delete">Delete</NavLink>
      <NavLink to="/update">Update</NavLink>
      <NavLink to="/newUp">newUp</NavLink>
    </div>
  );
};

export default Navigation;