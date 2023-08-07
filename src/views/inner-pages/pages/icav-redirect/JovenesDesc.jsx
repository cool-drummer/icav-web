import React from "react";

const JovenesDesc = () => {
  return (
    <div className="row align-items-center">
      <div
        className="col-xl-5 col-lg-6 ms-auto order-lg-last"
        data-aos="fade-left"
      >
        <div className="title-style-fourteen">
          <div className="upper-title"></div>
          <h2>#jovenes911</h2>
        </div>
        <div className="tag-line pb-10">
          Somos la Tribu de 18 a 26 años, una auténtica familia de la iglesia
          que tiene una pasión y un corazón para adorar y servir a Jesús.
          Nuestro deseo es ayudar a las personas a conectarse con Él y ser una
          extensión del corazón de la iglesia local. Hemos resuelto vivir
          rindiendo nuestra voluntad a los proyectos de Dios. Cada viernes nos
          reunimos a las 8:00 p.m. y tenemos grupos de conexión en diferentes
          horarios.
        </div>
        <a href="#" className="theme-btn-fourteen">
          Create survay now{" "}
        </a>
      </div>
      <div
        className="col-lg-6 order-lg-first text-center text-lg-left"
        data-aos="fade-right"
      >
        <div className="illustration-holder-two d-inline-block ps-4 ps-md-5 md-mt-90">
          <img src="images/assets/screen_38.png" alt="" className="w-200" />
          <img
            src="images/assets/screen_38.1.png"
            alt=""
            className="shapes shape-one"
          />
        </div>
      </div>
    </div>
  );
};

export default JovenesDesc;
