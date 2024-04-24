import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/work.css";

export const Work = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="layer-one container-fluid" id="work-body">
      <div className="main mt-5">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className=" links col-1">
              <div className="left-link">
                <p>O__/2024</p>
              </div>
              <p>______________</p>
              <p className="github">
                <a href="https://github.com/jasmininneh">HOME</a>
              </p>
            </div>
            <div className="intro col">
              <h5 className="name mb-3">WORK</h5>
              <p>
                This is a showcase of my finest projects across multiple
                domains, reflecting my proficiency as a full-stack developer
                with a strong inclination towards frontend development.My
                technical expertise includes proficiency in React, Bootstrap,
                JavaScript, CSS for frontend development, and Python and MySQL
                for backend solutions.
              </p>
              <p>
                As the digital landscape continually evolves, I adapt and grow,
                constantly acquiring new skills and knowledge to remain at the
                cutting edge of innovation and creativity.
              </p>
            </div>
            <div className="right-column col-8">
              <h1 className="large-text display-1 work-large-text">
                ADAPTIVE
              </h1>
              <h1 className="large-text display-1 work-large-text">
                PURPOSEFUL
              </h1>
              <h1 className="large-text display-1 work-large-text">
                SCALABLE 
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
