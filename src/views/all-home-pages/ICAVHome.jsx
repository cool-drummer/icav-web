import React from "react";
import { Helmet } from "react-helmet";
import FancyFeatureTen from "../../components/features/FancyFeatureTen";
import Blog from "../../components/form-survey-landing/Blog";
import Features from "../../components/form-survey-landing/Features";
import Footer from "../../components/form-survey-landing/Footer";
import HeaderLandingDark from "../../components/header/landing/HeaderLandingDark";
import HeroBannerEight from "../../components/icav-home/HeroBannerEight";
import Portfolio from "../../components/icav-home/Portfolio";
import TestimonialSeven from "../../components/testimonial/TestimonialSeven";
import Map from "../../elements/Map";

const FormSurveyLanding = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>icav teoloyucan</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDark />
      {/* End Header */}

      <HeroBannerEight />

      <div
        className="fancy-feature-thirtyFive position-relative col-md-12"
        id="product"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="block-style-thirtySix">
                <div className="title-style-fourteen ">
                  <div className="upper-title">forma parte</div>
                  <h2 className="">únetenos.</h2>
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

      <div className="form-banner position-relative col-md-12" style={{ background: '#202020' }}>
        <div className="container">
          <Features />
        </div>
      </div>

      <div className="form-banner position-relative col-md-12">
        <div className="container">
          <div
            className="title-style-eleven text-center mb-40 md-mb-20"
            data-aos="fade-up"
          >
            <h2>Eventos</h2>
            <p className="mt-25 md-mt-10">
              Haz click en en el evento que te interese para saber mas{" "}
            </p>
          </div>

          <div className="row">
            <Blog />
          </div>
        </div>
      </div>
      

      <div
        className="client-feedback-slider-six pt-170 md-pt-120"
        id="feedback"
      >
        <div className="inner-container " style={{ background: '#202020' }}>
          <div className="container ">
            <div className="row">
              <div
                className="col-lg-7 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-nine text-center">
                  <h6></h6>
                  <h2 className="text-white">
                    nuestros
                   <br />
                    <span>
                      valores <img src="images/shape/201.svg" alt="shape" />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* End .container */}
          <div className="clientSliderSix style-two">
            <TestimonialSeven />
          </div>
        </div>
        {/*  /.inner-container */}
      </div>

      
      
      <div className="fancy-feature-ten" id="features" style={{ background: '#202020' }}>
        <div className="">
          <div className="">
            <div className="row align-items-center">
              <div
                className="col-md-12"
                data-aos="fade-center"
                data-aos-duration="1200"
              >
                <div className="title-style-six">
                  <center><h3 className="text-white">
                  visitanos
                  </h3></center>
                  <center><h5 className="text-white-50">no podemos esperar a conocerte</h5></center>
                </div>

              </div>
              <div className="">
                <FancyFeatureTen />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Map />

      <div className="theme-footer-nine lg-container">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FormSurveyLanding;
