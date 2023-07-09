import React from "react";
import { AboutItemWrapper } from "./AboutItem.styled";

export const AboutItem = ({ color, active, data }) => {
  return (
    <AboutItemWrapper color={color} active={active} className="about-item">
      <div className="logo">
      <p>{data.p}</p>
      </div>
      <div className="text">
        <h3>{data.title}</h3>
        <p>{data.p}</p>
      </div>
    </AboutItemWrapper>
  );
};
