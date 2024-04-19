import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="layer-one container-fluid">
      <div className="main mt-5">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className=" links col-1">
              <div className="left-link">
                <p>O__/2024</p>
              </div>
              <p>______________</p>
              <p className="github">
                <a href="https://github.com/jasmininneh">GITHUB</a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  >LINKEDIN</a
                >
              </p>
              <p>
                <a href="https://gpt-3-application-zeta.vercel.app/"
                  >PROJECTS</a
                >
              </p>
            </div>
            <div className="intro col">
              <h5 className="name mb-3">Jasmin Nicole Inneh</h5>
              <p>Full Stack Developer | React | JavaScript | Python |MySQL</p>
              <p>
                Creating beautiful and engaging digital experiences in Miami,
                Florida.
              </p>
            </div>
            <div className="right-column col-8">
              <h1 className="large-text display-1">WORK</h1>
              <h1 className="large-text display-1">ABOUT</h1>
              <h1 className="large-text display-1">CONTACT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};