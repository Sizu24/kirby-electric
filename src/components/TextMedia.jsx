import React from "react";

function TextMedia({ accent, flipped, image, title, paragraphs }) {

  function addClasses () {
    let classNames = "text-media";
    if (accent) {
      classNames += " " + accent;
    }
    if (flipped === true) {
      classNames += " text-media--flipped";
    }
    return classNames;
  }

  return (
    <div className={addClasses()}>
      <div className="text-media__text">
        <h3 className="text-media__title">
          {title}
        </h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-media__body">
          {paragraph}
          </p>
        ))}
      </div>
      <div className="text-media__media">
        <img className="text-media__image" src={image} alt="" />
      </div>
      
    </div>
  );

}

export default TextMedia;