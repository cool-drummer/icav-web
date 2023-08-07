import React from "react";
import { Helmet } from "react-helmet";
import NinosDescription from "./NinosDescription";
import HeaderLandingDark from "../../../../components/header/landing/HeaderLandingDark";


const Ninos = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>
         Niños
        </title>
      </Helmet>


      <HeaderLandingDark />
   
      <div className="block-style-thirtySix lg-container pt-225 md-pt-120">
        <div className="container">
          <NinosDescription />
        </div>
      </div>

 
      {/* <!-- /.integrated-apps --> */}

      {/* <!--
        =====================================================
            Client Feedback Slider Eight
        =====================================================
        --> */}
      
      <div className="theme-footer-nine lg-container">
        <div className="container">
        
        </div>
      </div>
    </div>
  );
};

export default Ninos;
