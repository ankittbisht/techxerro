import React from "react";
import Slider from "react-slick";
import { indsData } from "../utils/constant";
import { Card } from "react-bootstrap";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div>
      <button className="btn2" onClick={onClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2539_816)">
            <path
              d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2539_816">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div>
      <button className="btn1" onClick={onClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2539_821)">
            <path
              d="M7.828 11L13.192 5.63605L11.778 4.22205L4 12L11.778 19.778L13.192 18.364L7.828 13H20V11H7.828Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2539_821">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="matrix(-1 0 0 1 24 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container position-relative multipleitems">
      <Slider {...settings}>
        {indsData.map((card) => (
          <div key={card.id} className="">
            <Card>
              <Card.Body>
                <h5>{card.title}</h5>
                <img src={card.icon} alt="Logo" className="" />
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
