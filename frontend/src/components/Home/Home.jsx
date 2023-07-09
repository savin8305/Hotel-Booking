import React from "react";
import "./Home.css";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import { Projects } from "../../pages/Projects";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Page } from "../Page";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("java", java);
const Home = ({ timelines, youtubes, skills, about }) => {
  const handleCardHover = () => {
    document.querySelector(".card").classList.add("active");
  };

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <img className="fimg" src={skills.image7.url} alt="Face1" />
        </Typography>
        <div className="homeCanvasBox">
          <Typography className="text" variant="h2">
            Hello!
          </Typography>
          <Typography className="text" variant="h2">
            World!
          </Typography>
          <Typography className="text" variant="h2">
            I am !
          </Typography>
          <Typography className="text" variant="h2">
            Akash!
          </Typography>
          <Typography className="text" variant="h2">
            Vishwakarma
          </Typography>
        </div>
      </div>
      <div className="dailyquote">
        <div className="quote-wrapper god-level">
          <span className="quote-left">“</span>
          <Typography variant="h4" className="quote-text text">
            {about.quote.substring(0, 250)}
          </Typography>
          <span className="quote-right">”</span>
        </div>
      </div>

      <div>
        <Typography className="text" variant="h2">
          <Page className="text1" header="TIMELINE" />
        </Typography>

        <TimeLine timelines={timelines} />
      </div>

      <div className="homeContainer">
        <Typography className="text" variant="h2">
          <Page className="text1" header="SKILLS" />
        </Typography>
        <div className="homeYoutube">
          <Projects skills={skills} />
        </div>
      </div>
      <Typography
            style={{
              marginTop: "10rem",
            }}
            className="text proje"
            variant="h2"
          >
            <Page className="text1 " header="PROJECTS" />
          </Typography>
      <div className="homeContainer">
    
        <div className="homeYoutube">
          

          <div className="homeYoutubeWrapper">
            {youtubes.map((item) => (
              <YoutubeCard
                image={item.image.url}
                title={item.title}
                url={item.url}
                id={item._id}
                key={item._id}
              />
            ))}
          </div>
          <Typography className="text abot" variant="h2">
            <Page className="text1 " header="ABOUT" />
          </Typography>
          <div>
            <p className="Cont13">
              <SyntaxHighlighter
                className="Cont13  Cont14 text1"
                language="java"
                style={atomOneDark}
              >
                {about.skill1name3.substring(11, 10000)}
              </SyntaxHighlighter>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
