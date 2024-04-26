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
                <a href="/">Home</a>
              </p>
            </div>
            <div className="about col">
              <h1 className="about-title mb-3">About</h1>
              <h4>
                Hi. 
                <br />
                I'm Jasmin Inneh. A software engineer, innovator, and code
                detective. Passionate about crafting creative solutions and
                unraveling the complexities of programming to transform
                challenging problems into elegant results.
              </h4>
              <p>
                The fusion of creativity and technology has always been my
                playground. From tinkering with design software and crafting
                Myspace pages in high school to delving into coding, my journey
                spans over a decade. Today, my palette includes a diverse array
                of tools and languages—from React to Python and beyond.
              </p>
              <p>
                What ignites my passion is the ability to breathe life into
                ideas through elegant code and immersive user experiences.
                Software engineering isn't just a career—it's a calling. It's
                about unraveling puzzles, crafting elegant solutions, and
                inspiring change.
              </p>
              <p>
                With each project, I blend innovation with artistry, enriching
                lives and captivating hearts and minds. It's about embracing the
                endless possibilities of the digital canvas, channeling my
                passion for creativity and expression into every line of code I
                write.
              </p>

              <br />
              <br />
              <p>This is one of my favorite quotes by Robert Collier:</p>
              <h5 className="large-text display-1">
                "Success is the sum of small efforts, repeated day in and day
                out."
              </h5>
            </div>
            <span className="about-headers">Skills</span>
            <div className="about-right-column col-8">
              {/* <span className="about-headers">Skills</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
