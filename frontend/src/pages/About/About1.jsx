import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, red, yellow } from "../../utils";
import { Educations,Text } from "./About.styled";
import { AboutItem } from "./AboutItem";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const  About1 = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
    
        <Text>
        
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Jaypee University Of Engineering and  Technology Guna",
                p: "2020 to 2024",
        
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Sardar Patel H.S School JP Nagar Rewa",
                p: " 2018 to 2020",
        
              }}
            />
            <AboutItem
              color={red}
              data={{
                title: "Sardar Patel H.S School JP Nagar Rewa",
                p: "2008 to 2018",
          
              }}
            />
          </Educations>
        </Text>
       
     
    </div>
  );
};
