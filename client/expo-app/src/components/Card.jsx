import React from "react";
import './Card.css'

function Card({ image, username, title, category, description }) {
  return (
    <div className="col">
      <div className="card h-100 rounded-4 overflow-hidden card-custom">
        <img src={image} className="card-img-top" alt={title}></img>
        <div className="card-body pb-0">
          <h5 className="card-title mb-3">{title}</h5>
          <p className="card-text">
            <ul style={{ padding: "0 0 0 18px" }}>
              <li>{username}</li>
              <li>IT 4.0 Robotic</li>
              <li>{description}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
