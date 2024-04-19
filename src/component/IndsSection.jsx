import React from "react";
import { Button, Card } from "react-bootstrap";
import "./style.css";
import { indsData } from "../utils/constant";
import MultipleItems from "./MultipleItems";




function IndsSection() {
  return (
    <div className="inds-section container">
      <div className="row">
        <div className="col-4">
          <h2>Industries we serve</h2>
        </div>
        <div className="col-8 line"></div>
      </div>
      <div className="row pad">
        <div className="col-4"></div>
        <div className="col-8 ">
          <p>
            Sed velit ultricies convallis placerat semper lectus viverra. Id
            enim vel faucibus dolor et id. Varius orci condimentum sed felis,
            scelerisque eget massa consectetur vitae. Est sit turpis laoreet
            nulla diam morbi quis. Diam sed purus risus sit tincidunt tincidunt.
            Viverra sed vestibulum, scelerisque aliquet.
          </p>
        </div>
      </div>
      <MultipleItems/>
      {/* <div className="row">
        <div className="col-1 d-flex gap-4">
          <Button className="btn1">
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
          </Button>
          
        </div> */}
      {/* </div> */}
      {/* <div className="row ">
        {indsData.map((card) => (
          <div key={card.id} className="col-2 ">
            <Card>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <img src={card.icon} alt="Logo" className="" />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default IndsSection;
