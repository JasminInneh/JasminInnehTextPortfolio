import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/about.css";

export const About = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="layer-one container-fluid">
      <div className="abbout-main mt-5">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="about-links col-1">
              <div className="about-left-link">
                <p>O__/2024</p>
              </div>
              <p>______________</p>
              <p>
                <a href="/">HOME</a>
              </p>
            </div>
            <div className="about col">
              <h1 className="about-title mb-3">About</h1>
              <div className="row align-items-center">
                <div className="col-12 about-me-paragraph">
                  <h4>
                    I'm Jasmin Inneh. A software engineer, innovator, and code
                    detective. Passionate about crafting creative solutions and
                    unraveling the complexities of programming to transform
                    challenging problems into elegant results.
                  </h4>
                  <br />
                  <p>
                    The fusion of creativity and technology has always been my
                    playground. From tinkering with design software and crafting
                    Myspace pages in high school to delving into coding, my
                    journey spans over a decade. Today, my palette includes a
                    diverse array of tools and languages—from React to Python
                    and beyond.
                  </p>
                  <p>
                    What ignites my passion is the ability to breathe life into
                    ideas through elegant code and immersive user experiences.
                    Software engineering isn't just a career—it's a calling.
                    It's about unraveling puzzles, crafting elegant solutions,
                    and inspiring change.
                  </p>
                  <p>
                    With each project, I blend innovation with artistry,
                    enriching lives and captivating hearts and minds. It's about
                    embracing the endless possibilities of the digital canvas,
                    channeling my passion for creativity and expression into
                    every line of code I write.
                  </p>
                </div>

                <div className="col-12">
            <div className="skills">
              <h2 className="skills-header">Skills</h2>
              <div className="skills-list">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React JS</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">VSCode</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">DOM</span>
                <span className="skill-tag">JSON</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">OOP</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
            </div>


            <div className="cv-button align-items-center">
              <a
                href="https://flowcv.com/resume/mhl4i4f3hc"
                className="btn btn-dark btn-lg"
                download
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
