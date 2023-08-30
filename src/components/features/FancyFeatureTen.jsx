import React from "react";
import { Link } from "react-router-dom";

const FeaturesContent = [
  {
    bgColor: "#FFEBDB",
    icon: "68",
    title: "domingos",
    desc: `de 12pm a 4pm`,
    dataDealy: "0",
  },
  {
    bgColor: "#E0F8F8",
    icon: "67",
    title: "jueves",
    desc: `de 5pm a 9pm`,
    dataDealy: "100",
  },
];

const FancyFeatureTen = () => {
  return (
    <div className="row justify-content-center">
      {FeaturesContent.map((val, i) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDealy}
          key={i}
        >
          <div className="block-style-fifteen mt-30">
            
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-ten */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTen;
