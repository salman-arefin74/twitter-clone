import React from "react";
import { Link } from 'react-router-dom';
import "./SidebarOption.css";

function SidebarOption({ active, text, link, Icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />

      <Link className="sidebarLink" to={link}><h2>{text}</h2></Link>
    </div>
  );
}

export default SidebarOption