import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const portfolioContent = [
    {
      _id: 1,
      image: "oracion",
      editLink: "/oracion",
      viewLink: "#",
    },
    {
      _id: 2,
      image: "jovenes",
      editLink: "/jovenes",
      viewLink: "#",
    },
    {
      _id: 3,
      image: "img_563",
      editLink: "/matrimonios",
      viewLink: "#",
    },
    {
      _id: 4,
      image: "img_564",
      editLink: "/musica",
      viewLink: "#",
    },
    {
      _id: 5,
      image: "img_565",
      editLink: "/ninos",
      viewLink: "#",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {portfolioContent.map((item) => (
          <div className="item" key={item._id}>
            <div className="card-block">
              <img
                src={`images/media/${item.image}.png`}
                alt=""
                className="w-100"
              />
              <div className="hover tran3s d-flex align-items-center justify-content-center flex-column">
                <a href={item.editLink} className="edit tran3s">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
