import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contact.css";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="layer-one container-fluid" id="contact-body">
      <div className="main">
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
            <div className="contact col">
              <h2 className="contact-title mb-3">HELLO.</h2>
              <p>
                Looking for a stunning, meticulously crafted website that you
                can manage and update independently? Get in touch.
              </p>
            </div>
            <div className="contact-right-column col-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
