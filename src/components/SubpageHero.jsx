import React from "react";

function SubpageHero({ title, subhead, image }) {

  return (
    <div className="subpage-hero">
      <img className="subpage-hero__image" src={image} />
      <div className="subpage-hero__content">
        <h1 className="subpage-hero__title">{title}</h1>
        <p className="subpage-hero__subhead">{subhead}</p>
      </div>
    </div>
  );
}

export default SubpageHero;