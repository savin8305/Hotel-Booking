import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
     <a href={url} className="projectCard" target="_blank" style={{ textDecoration: "none", display: "flex", flexDirection: "column", width: "300px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", transition: "box-shadow 0.3s" }}>
  <div style={{ position: "relative" }}>
    <img src={projectImage} alt="Project" style={{ width: "100%", height: "auto", borderRadius: "8px 8px 0 0" }} />
    <div style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "rgba(255, 255, 255, 0.7)", padding: "5px 10px", borderRadius: "4px", fontSize: "12px", textTransform: "uppercase", fontWeight: "bold", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>{description.substring(0,10)}</div>
  </div>
  <div style={{ padding: "20px", backgroundColor: "#333333", flex: "1" }}>
    <Typography variant="h5" style={{ textTransform: "uppercase", fontWeight: "bold", marginBottom: "10px" }}>{projectTitle}</Typography>
    <Typography variant="h6" style={{ fontWeight: "bold" }}>Tech Stack:</Typography>
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "8px" }}>
      
        <span className="asdf" style={{ margin: "3px", padding: "5px 10px", borderRadius: "12px", backgroundColor: "#f0f0f0", fontSize: "12px", cursor: "pointer", transition: "background-color 0.3s" }}>
          {technologies}
        </span>
    
  
    </div>
  </div>
</a>


      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h1">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
