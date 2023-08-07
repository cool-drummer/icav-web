import React, { useState, useRef } from "react";

const HeroBannerSix = () => {
  const videoRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <h1
            className="title-style-eleven text-center mt-30"
            style={{ animation: "fade-up 1200ms", marginBottom: "30px" }}
          >
            Build your Next <span>Product</span> with Deski.
          </h1>
          <p
            className="hero-sub-heading"
            style={{ animation: "fade-up 1200ms", animationDelay: "100ms" }}
          >
            Deski delivered blazing fast, striking soludtion
          </p>
          <div className="d-sm-flex align-items-center button-group">
            <div
              className="d-flex align-items-center video-button fancybox order-sm-last"
              onClick={() => videoRef.current.play()}
              style={{ animation: "fade-up 1200ms", animationDelay: "150ms" }}
            >
              <img
                src="images/icon/play-circle.svg"
                alt="icon"
                className="icon"
                style={{ marginRight: "10px" }}
              />
              <span>See Intro Video</span>
            </div>
            <a
              href="#"
              className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one order-sm-first"
              style={{ animation: "fade-up 1200ms", animationDelay: "200ms" }}
            >
              <img
                src="images/icon/apple.svg"
                alt="icon"
                className="icon"
                style={{ marginRight: "10px" }}
              />
              <div>
                <span>Download on the</span>
                <strong>App store</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
      <video
        ref={videoRef}
        className="video-background"
        src="https://www.youtube.com/watch?v=QrR_gm6RqCo"
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "auto",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </>
  );
};

export default HeroBannerSix;
