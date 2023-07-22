import React from "react";

function SubpageHero({ title, subhead }) {

  return (
    <div className="subpage-container container">
    <h2 className="subpage__title">{title}</h2>
    <p className="subpage__subhead">{subhead}</p>
    </div>
  );
}

export default SubpageHero;