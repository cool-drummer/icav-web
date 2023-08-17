import React from "react";
import Video from "../../elements/Video";
import BrandFive from "../brand/BrandFive";

const heroContent = {
  title: '"lorem,',
  description: ` lorem"`,
  buttonText: " Download - It’s free",
};

const HeroBannerEight = () => {
  return (
    <div className="hero-banner-eight">
      <div className="video-overlay"></div>
      <div className="video-container d-md-flex flex-md-column">
        {" "}
        {/* Utiliza d-md-flex para flexbox en dispositivos medianos y grandes */}
        <Video />
        <div className="video-content position-relative overflow-hidden" >
          <div className="col-lg-10 m-auto">
            <h1 className="hero-heading" data-aos="fade-up">
              {heroContent.title}
            </h1>
            <p
              className="hero-sub-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {heroContent.description}
            </p>
            <a
              href="#"
              className="theme-btn-nine"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Contenido del botón */}
            </a>
          </div>
        </div>
      </div>

      {/* /.video-wrapper */}

      {/* /.partner-slider-two */}
    </div>
    //   /.hero-banner-eight
  );
};

export default HeroBannerEight;
