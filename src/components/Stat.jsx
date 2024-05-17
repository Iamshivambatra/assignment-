import React from "react";
import "./stat.css";

const Stat = ({ icon, title, subtitle }) => {
  return (
    <div className="container">
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default Stat;
