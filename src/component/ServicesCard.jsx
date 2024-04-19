import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";

function ServicesCard({ logo, name, intro }) {
  return (
    <Card className="service-card">
      {/* <Card.Img variant="top" src={logo} alt={name} /> */}

      <Card.Body>
        <div className="header d-flex justify-content-between align-items-center">
          {logo}
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3537 2.28911C19.3748 1.73713 18.9445 1.27261 18.3927 1.25158L9.40092 0.908873C8.84914 0.887843 8.38477 1.31827 8.36374 1.87025C8.3427 2.42224 8.77295 2.88676 9.32473 2.90779L17.3174 3.21242L17.0127 11.2081C16.9917 11.7601 17.4219 12.2246 17.9737 12.2456C18.5255 12.2667 18.9898 11.8362 19.0109 11.2843L19.3537 2.28911ZM1.86068 18.9031L19.0342 2.98469L17.6751 1.51739L0.501625 17.4358L1.86068 18.9031Z"
              fill="black"
            />
          </svg>
        </div>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{intro}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServicesCard;
