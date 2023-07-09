
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";

import {
  AnimatedSpan,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";

export const Home1 = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });



  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };
  return (
    <HomeWrapper ref={ref} id="home-page">
      <TextContainer>
        <Name>Akash Vishwakarma</Name>
        <Position>
          <div className="text first" aria-label="Full Stack Developer">
            {produceSpans("is Full Stack Developer and UI/UX Enthusiast!")}
          </div>
          <div className="text second" aria-label="UI/UX Enthusiast">
            {produceSpans("is Problem Solver and Btech CSE Student!")}
          </div>
        </Position>
      </TextContainer>
 
    </HomeWrapper>
  );
};
