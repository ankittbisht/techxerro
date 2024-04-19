import React from "react";
import "./style.css";

function BannerSection({ data }) {
  return (
    <div className="promo-section container ">
      <div className="row d-flex align-items-center">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <div className="col-6">
              <img src={item.imageData} alt="Image" className="img-fluid" />
            </div>
            <div className="col-6 ">
              <h2>{item.heading}</h2>
              <p>{item.content}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BannerSection;
