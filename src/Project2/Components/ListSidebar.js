import React from "react";
import { NavLink } from "react-router-dom";
function ListSidebar(props) {
  return (
    <>
      <NavLink
        exact="true" //replace
        className={({ isActive }) => (isActive ? "active" : "")}
        to={props.link}
        replace
      >
        <span type="button">
          <span>{props.name}</span>
          {props.icon}
        </span>
      </NavLink>
    </>
  );
}

export default ListSidebar;
