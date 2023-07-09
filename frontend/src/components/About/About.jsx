import { Button, Typography } from "@mui/material";
import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { Page } from "../Page";

const About = ({ about }) => {
  const resumelink = "https://akash01.netlify.app";
  return (
    <>
      <div className="aboutAvatar">
        <img src={about.avatar.url} alt="Abhi" />
      </div>
      <section className="about" id="about">
       
        <Typography className="text heading" variant="h2">
          <Page className="text1" header="ABOUT" />
        </Typography>

        <div class="row">
          <div class="box-container">
            <div class="box">
              <Typography variant="h3">
                {about.description3.substring(0, 3)}
              </Typography>
              <p>{about.description3.substring(3, 270)}</p>
            </div>
            <div class="box">
              <Typography variant="h3">
                {about.description.substring(0, 3)}
              </Typography>
              <p>{about.description.substring(3, 270)}</p>{" "}
            </div>
            <div class="box">
              <Typography variant="h3">
                {about.description1.substring(0, 3)}
              </Typography>
              <p>{about.description1.substring(3, 270)}</p>
            </div>
            <div class="box">
              <Typography variant="h3">
                {about.description2.substring(0, 3)}
              </Typography>
              <p>{about.description2.substring(3, 270)}</p>
            </div>
          </div>

          <div class="content ">
            <h3>
              my name is <span>{about.name}</span>
            </h3>
            <div style={{ display: "grid", gridGap: "40px" }}>
              <div>
                <p style={{ margin: "0", textAlign: "justify" }}>
                  {about.title.split(" ").slice(0, 35).join(" ")}
                </p>
              </div>
              <div>
                <p style={{ margin: "0", textAlign: "justify" }}>
                  {about.title.split(" ").slice(35, 90).join(" ")}
                </p>
              </div>

              <style>
                {`
    @media (max-width: 600px) {
      div {
        grid-template-columns: 1fr;
      }
    }
    `}
              </style>
            </div>

            <Link className="contact" to="/contact">
              {" "}
              <Button variant="contained" type="submit">
                Contact Me
              </Button>
            </Link>
            <a className="contact1" target="_blank" href={about.subtitle}>
              <Button variant="contained" type="submit">
                My - Resume
              </Button>
            </a>
          </div>
        </div>

        <div class="row">
          <div class="progress">
            <h3>
              {" "}
              {about.skill1name6}
              <span>90%</span>{" "}
            </h3>
            <div class="bar bar-1-1">
              <span></span>
            </div>
            <h3>
              {" "}
              {about.skill1name5} <span>75%</span>{" "}
            </h3>
            <div class="bar bar-1-2">
              <span></span>
            </div>
            <h3>
              {" "}
              {about.skill1name4} <span>80%</span>{" "}
            </h3>
            <div class="bar bar-1-3">
              <span></span>
            </div>
          </div>

          <div class="progress">
            <h3>
              {" "}
              {about.skill1name1} <span>95%</span>{" "}
            </h3>
            <div class="bar bar-2-1">
              <span></span>
            </div>
            <h3>
              {" "}
              {about.skill1name2}
              <span>80%</span>{" "}
            </h3>
            <div class="bar bar-2-2">
              <span></span>
            </div>
            <h3>
              {" "}
              {about.skill1name3.substring(0,10)} <span>65%</span>{" "}
            </h3>
            <div class="bar bar-2-3">
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
