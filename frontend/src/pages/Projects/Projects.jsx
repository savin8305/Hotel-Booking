import React, { useRef } from "react";
import { Page } from "../../components/Page";
import { NextButton } from "./carasoulButton";
import { ProjectItem } from "./ProjectItem";
import { Carasoul, ProjectContainer } from "./Projects.styled";
export const Projects = ({ skills }) => {
  const ref = useRef(null);
  const moveLeft = (e) => {
    console.log(ref.current.scrollLeft);
    document.querySelector(".wrapper").scrollLeft += 600;
  };
  const moveRight = (e) => {
    document.querySelector(".wrapper").scrollLeft -= 650;
  };
  return (
    < >
      <ProjectContainer ref={ref}>
        <div className="wrapper">
          <ProjectItem
            skills={skills.image1.url}
            title={skills.title1}
            subtitle={skills.subtitle1}
          />
          <ProjectItem
            skills={skills.image2.url}
            title={skills.title2}
            subtitle={skills.subtitle2}
          />
          <ProjectItem
            skills={skills.image3.url}
            title={skills.title3}
            subtitle={skills.subtitle3}
          />
          <ProjectItem
            skills={skills.image4.url}
            title={skills.title4}
            subtitle={skills.subtitle4}
          />
          <ProjectItem
            skills={skills.image5.url}
            title={skills.title5}
            subtitle={skills.subtitle5}
          />
          <ProjectItem
            skills={skills.image6.url}
            title={skills.title6}
            subtitle={skills.subtitle6}
          />
        </div>
      </ProjectContainer>
      <Carasoul>
        <NextButton flip onClick={moveRight} />
        <NextButton onClick={moveLeft} />
      </Carasoul>
    </>
  );
};
