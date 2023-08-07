import React from "react";
import { Helmet } from "react-helmet";
import MatrimoniosDesc from "./MatrimoniosDesc";
import HeaderLandingDark from "../../../../components/header/landing/HeaderLandingDark";


const Matrimonios = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>
        Matrimonios
        </title>
      </Helmet>


      <HeaderLandingDark />
   
      <div className="block-style-thirtySix lg-container pt-225 md-pt-120">
        <div className="container">
          <MatrimoniosDesc />
        </div>
      </div>
      
      <div className="theme-footer-nine lg-container">
        <div className="container">
        
        </div>
      </div>
    </div>
  );
};

export default Matrimonios;
