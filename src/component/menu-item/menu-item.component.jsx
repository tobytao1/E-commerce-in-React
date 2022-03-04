import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

export const MenuItem = ({ title, size, imageUrl, linkUrl }) => {
  let navigate = useNavigate();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        navigate(linkUrl);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
};
