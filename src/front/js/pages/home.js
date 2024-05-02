import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "animate.css";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="layer-one container-fluid" id="home-body">
      <div className="main animate__animated animate__fadeInDown">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="home-links col-1">
              <div className="home-left-link">
                <p>O__/2024</p>
              </div>
              <p>______________</p>
              <p className="github">
                <a href="https://github.com/jasmininneh">GITHUB</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                  LINKEDIN
                </a>
              </p>
              <p>
                <a href="https://gpt-3-application-zeta.vercel.app/">
                  PROJECTS
                </a>
              </p>
            </div>
            {/* Mobile navigation bar */}
            <div className="d-lg-none d-block">
              <div className="mobile-nav">
                <p>O__/2024</p>
                <p>______________</p>
                <p className="github">
                  <a href="https://github.com/jasmininneh">GITHUB</a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                    LINKEDIN
                  </a>
                </p>
                <p>
                  <a href="https://gpt-3-application-zeta.vercel.app/">
                    PROJECTS
                  </a>
                </p>
              </div>
            </div>
            <div className="home-intro col-lg">
              <h5 className="name mb-3">Jasmin Nicole Inneh</h5>
              <p>Full Stack Developer | React | JavaScript | Python |MySQL</p>
              <p>
                Creating beautiful and engaging digital experiences in Miami,
                Florida.
              </p>
            </div>
            <div className="home-right-column col-lg">
              <h1 className="large-text display-1 home-large-text">
                <a href="/Work">WORK</a>
              </h1>
              <h1 className="large-text display-1 home-large-text">
                <a href="/About">ABOUT</a>
              </h1>
              <h1 className="large-text display-1 home-large-text">
                <a href="/Contact">CONTACT</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};  
//   return (
//     <div className="layer-one container-fluid" id="home-body">
//       <div className="main animate__animated animate__fadeInDown">
//         <div className="container text-center">
//           <div className="row align-items-center">
//             <div className="home-links col-1">
//               <div className="home-left-link">
//                 <p>O__/2024</p>
//               </div>
//               <p>______________</p>
//               <p className="github">
//                 <a href="https://github.com/jasmininneh">GITHUB</a>
//               </p>
//               <p>
//                 <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
//                   LINKEDIN
//                 </a>
//               </p>
//               <p>
//                 <a href="https://gpt-3-application-zeta.vercel.app/">
//                   PROJECTS
//                 </a>
//               </p>
//             </div>
//             {/* Mobile navigation bar */}
//           <div className="d-lg-none d-block">
//             <div className="mobile-nav">
//               <p>O__/2024</p>
//               <p>______________</p>
//               <p className="github">
//                 <a href="https://github.com/jasmininneh">GITHUB</a>
//               </p>
//               <p>
//                 <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
//                   LINKEDIN
//                 </a>
//               </p>
//               <p>
//                 <a href="https://gpt-3-application-zeta.vercel.app/">
//                   PROJECTS
//                 </a>
//               </p>
//             </div>
//           </div>
//             <div className="home-intro col">
//               <h5 className="name mb-3">Jasmin Nicole Inneh</h5>
//               <p>Full Stack Developer | React | JavaScript | Python |MySQL</p>
//               <p>
//                 Creating beautiful and engaging digital experiences in Miami,
//                 Florida.
//               </p>
//             </div>
//             <div className="home-right-column col-8">
//               <h1 className="large-text display-1 home-large-text">
//                 <a href="/Work">WORK</a>
//               </h1>
//               <h1 className="large-text display-1 home-large-text">
//                 <a href="/About">ABOUT</a>
//               </h1>
//               <h1 className="large-text display-1 home-large-text">
//                 <a href="/Contact">CONTACT</a>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
