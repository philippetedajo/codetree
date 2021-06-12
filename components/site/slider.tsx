import React, { Component } from "react";
import Slider from "react-slick";

export default class FadeBackground extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    };

    return (
      <div className="">
        <Slider {...settings}>
          <div className="fade-background-a h-96" />
          <div className="fade-background-b h-96" />
        </Slider>
      </div>
    );
  }
}
