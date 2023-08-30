import React from "react";
import Video from "../../elements/Video";
import BrandFive from "../brand/BrandFive";

const heroContent = {
  title:
    '"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar."',
  description: `Mateo 11:28 (RVR1960) - `,
  buttonText: " ",
};

const HeroBannerEight = () => {
  return (
    <div className="hero-banner-eight">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/video/video-header-icavweb.mp4" type="video/mp4" />
          
        </video>
        <div className="video-content">
          <div className="col-md-10">
            <h1 className="hero-heading text-white" data-aos="fade-up">
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
    </div>
  );
};

export default HeroBannerEight;
