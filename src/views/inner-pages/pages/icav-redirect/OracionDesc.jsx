import React from "react";

const OracionDesc = () => {
  return (
    <div className="row align-items-center">
      <div
        className="col-xl-5 col-lg-6 ms-auto order-lg-last"
        data-aos="fade-left"
      >
        <div className="title-style-fourteen">
          <div className="upper-title">oración</div>
          <h2>#pray</h2>
        </div>
        <div className="tag-line pb-10">
        En nuestra comunidad de fe, creemos en el poder de la oración como un medio vital para fortalecer nuestra relación con Dios y con nuestros hermanos y hermanas en Cristo. Los grupos de oración son un componente esencial de nuestra vida congregacional y una oportunidad para crecer en nuestra vida espiritual mientras nos apoyamos mutuamente en la oración.
        </div>
       
      </div>
      <div
        className="col-lg-6 order-lg-first text-center text-lg-left"
        data-aos="fade-right"
      >
        <div className="illustration-holder-two d-inline-block ps-4 ps-md-5 md-mt-90">
          <img src="images/assets/pray.jpg" alt="" className="w-200" />
       
        </div>
      </div>
    </div>
  );
};

export default OracionDesc;
