import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderSlick(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="bg-red-600">
        <h3>1</h3>
      </div>
      <div className="bg-black">
        <h3>2</h3>
      </div>
      <div className="bg-red-600">
        <h3>3</h3>
      </div>
    </Slider>
  );
}
