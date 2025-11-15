import React from "react";
import { NavLink } from "react-router";

const Navlink = ({ data }) => {
  return (
    <li>
      <NavLink
        className={
          ({ isActive }) =>
            isActive
              ? "text-emerald-600 underline" 
              : "hover:text-emerald-500 hover:underline" 
        }
        to={data.path}
      >
        {data.name}
      </NavLink>
    </li>
  );
};

export default Navlink;
