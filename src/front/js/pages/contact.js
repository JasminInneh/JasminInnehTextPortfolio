import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contact.css";
import "animate.css";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="layer-one container-fluid" id="contact-body">
      <div className="main animate__animated animate__fadeInUp">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className=" contact-links col-1">
              <div className="contact-left-link">
                <p>O__/2024</p>
              </div>
              <p>______________</p>
              <p className="home">
                <a href="/">HOME</a>
              </p>
            </div>
            <div className="contact col-6">
              <h2 className="contact-title mb-3">Hello.</h2>
              <div className="contact-info">
                <p>
                  Looking for a stunning, meticulously crafted website that you
                  can manage and update independently? Get in touch.
                </p>
                <a
                  href="mailto:jasmininneh@gmail.com"
                  className="contact-link-horizontal"
                >
                  <p>Email: jasmininneh@gmail.com</p>
                </a>

                <p>
                  On the Internet:
                  <a
                    href="www.linkedin.com/in/jasmin-inneh-3b05b7298"
                    className="contact-link-horizontal"
                  >
                    {" "}
                    LinkedIn
                  </a>
                  /
                  <a
                    href="https://github.com/jasmininneh"
                    className="contact-link-horizontal"
                  >
                    Github
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-right-column col-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
