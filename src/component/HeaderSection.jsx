import React from "react";

const HeaderSection = ({ heading, content, buttonText }) => {
  return (
    <div className="Header-section container  ">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-5">
          <h1>{heading}</h1>
          <p>{content}</p>
          <button className="d-flex align-items-center">
            {buttonText}
            <svg
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964467C12.9763 0.769205 12.6597 0.769205 12.4645 0.964467C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03554L16.3536 4.85355ZM-4.37114e-08 5L16 5L16 4L4.37114e-08 4L-4.37114e-08 5Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default HeaderSection;
