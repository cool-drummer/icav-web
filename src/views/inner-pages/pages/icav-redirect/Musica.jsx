import React from "react";
import { Helmet } from "react-helmet";
import MusicaDesc from "./MusicaDesc";
import HeaderLandingDark from "../../../../components/header/landing/HeaderLandingDark";


const Musica = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>
        Musica
        </title>
      </Helmet>


      <HeaderLandingDark />
   
      <div className="block-style-thirtySix lg-container pt-225 md-pt-120">
        <div className="container">
          <MusicaDesc />
        </div>
      </div>
      
      <div className="theme-footer-nine lg-container">
        <div className="container">
        
        </div>
      </div>
    </div>
  );
};

export default Musica;
