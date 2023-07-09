import React from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "../../components/form/";
import { Cube, Face } from "./ProjectItem.styled";
export const ProjectItem = ({ skills, title, subtitle }) => {
  const { ref, inView } = useInView();
  return (
    <Cube ref={ref} className={inView ? "fadeIn" : null}>
      <Face className="face-1" image={skills}>
        <div className="img"></div>
        <div className="content">
          <h3 className="text-h">{title}</h3>
        </div>
      </Face>
      <Face className="face-2" image={skills}>
        <div className="img"></div>
      </Face>
      <Face className="face-3" image={skills}>
      <div className="img"></div>

      </Face>
    </Cube>
  );
};
