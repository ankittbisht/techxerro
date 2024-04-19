import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";

const TechnologySection = ({ data }) => {
  // Sample data for cards
  const { heading, content, cardsData } = data;

  return (
    <div className="Tech-section container">
      <div className="row">
        <div className="col-4">
          <h2>{heading}</h2>
        </div>
        <div className="col-8">
          <p>{content}</p>
        </div>
      </div>

      <div className="row cardsection">
        {cardsData.map((card) => (
          <div key={card.id} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <Card >
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
