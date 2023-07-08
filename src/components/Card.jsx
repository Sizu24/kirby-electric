import React from "react";

function Card ({imageUrl, imageAlt, title, body}) {
  return (
    <div className="card">
      <div className="card__image-container">
        <img className={"card__image"} src={imageUrl} alt={imageAlt} />
      </div>
      <div className="card-content">
        <h3 className="card-content__title">{title}</h3>
        <p className="card-content__body">{body}</p>
      </div>
    </div>
  );
}

export default Card;