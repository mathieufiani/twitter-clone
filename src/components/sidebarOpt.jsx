import React from "react";
import "../assets/styles/components/sidebarOpt.css";
function sidebarOpt({ active, text, Icon }) {
  return (
    <div className={`sidebarOpt ${active && "sidebarOpt--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default sidebarOpt;
