import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDark from "../../../../components/header/landing/HeaderLandingDark";
import DiscipuladoDesc from "./DiscipuladoDesc";


const Discipulado = () => {
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
          <DiscipuladoDesc />
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

export default Discipulado;