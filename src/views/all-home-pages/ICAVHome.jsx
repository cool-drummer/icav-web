import React from "react";
import { Helmet } from "react-helmet";
import Portfolio from "../../components/icav-home/Portfolio";
import HeaderLandingFormSurvey from "../../components/form-survey-landing/HeaderLandingFormSurvey";
import Blog from "../../components/form-survey-landing/Blog";
import Footer from "../../components/form-survey-landing/Footer";
import HeroBannerEight from "../../components/icav-home/HeroBannerEight";
import Map from "../../elements/Map"
const FormSurveyLanding = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>Lorem</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingFormSurvey />
      {/* End Header */}

      <HeroBannerEight />

      <div
        className="fancy-feature-thirtyFive position-relative lg-container  pt-140 md-pt-100"
        id="product"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="block-style-thirtySix">
                <div className="title-style-fourteen">
                  <div className="upper-title">forma parte</div>
                  <h2>únetenos.</h2>
                </div>
                <div className="tag-line">
                  Descubre nuestros grupos y ministerios
                </div>
              </div>
              {/* <!-- /.block-style-thirtySix --> */}
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="portfolio_slider_two survey-slider">
            <Portfolio />
          </div>
        </div>
      </div>

     

     <div className="feature-blog-five lg-container mt-50 md-pt-100">
        <div>
        <Map />
        </div>
      </div>



      <div className="feature-blog-five lg-container mt-30 md-pt-60">
        <div className="container">
          <div
            className="title-style-eleven text-center mb-40 md-mb-20"
            data-aos="fade-up"
          >
            <h2>Inside Story</h2>
            <p className="mt-25 md-mt-10">
              Automatically send people to the next stage of the journey{" "}
            </p>
          </div>

          <div className="row">
            <Blog />
          </div>
        </div>
      </div>

      <div className="theme-footer-nine lg-container">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FormSurveyLanding;
