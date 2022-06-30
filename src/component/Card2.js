import React from "react";
import PropTypes from "prop-types"
import "./card.css";
function Card2({ imageSource, name, gpa }) {
  return (
    <div className="card">
      <div className="grid-container">
      <div>
        <img src={imageSource} alt="" />
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <p className="card-text">
          {gpa ? gpa: " Wrong"}
        </p>
      <button>Grade</button>
      </div>
      </div>
    </div>
    
  );
}

Card2.propTypes = {
    name: PropTypes.string.isRequired,
    gpa: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card2;