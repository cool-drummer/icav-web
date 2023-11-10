import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDark from "../../../../components/header/landing/HeaderLandingDark";
import GrupoConexionDesc from "./GrupoConexionDesc";


const GrupoConexion = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>
        Worship Nights
        </title>
      </Helmet>


      <HeaderLandingDark />
   
      <div className="block-style-thirtySix lg-container pt-225 md-pt-120">
        <div className="container">
          <GrupoConexionDesc />
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

export default GrupoConexion;