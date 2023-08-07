import React from "react";

const MusicaDesc = () => {
  return (
    <div className="row align-items-center">
      <div
        className="col-xl-5 col-lg-6 ms-auto order-lg-last"
        data-aos="fade-left"
      >
        <div className="title-style-fourteen">
          <div className="upper-title">nuestros pequeños</div>
          <h2>#kids</h2>
        </div>
        <div className="tag-line pb-10">
          ICAV Kids es el espacio seguro donde tus hijos pueden aprender a
          conectarse con Dios. No se trata de un simple lugar en el que dejarlos
          mientras disfrutas la reunión, ¡es mucho más que eso! En icf Kids
          tenemos una reunión y un espacio especialmente diseñados para tus
          niños. Ellos tienen su propio tiempo de alabanza en el que pueden
          disfrutar de la presencia de Dios y aprender a adorarlo con libertad y
          pasión. Únete a nuestra visión e integra a tus hijos. ¡Juntos
          trabajamos mejor!
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

export default MusicaDesc;
