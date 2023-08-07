import React from "react";
import { Helmet } from "react-helmet";
import JovenesDesc from "./JovenesDesc";
import HeaderLandingDark from "../../../../components/header/landing/HeaderLandingDark";


const Jovenes = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>
        Jovenes
        </title>
      </Helmet>


      <HeaderLandingDark />
   
      <div className="block-style-thirtySix lg-container pt-225 md-pt-120">
        <div className="container">
          <JovenesDesc />
        </div>
      </div>
      
      <div className="theme-footer-nine lg-container">
        <div className="container">
        
        </div>
      </div>
    </div>
  );
};

export default Jovenes;
