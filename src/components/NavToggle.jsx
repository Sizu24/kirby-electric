import React from "react";

function NavToggle({ toggle, isOpen }) {

  return(
    <button className="nav-toggle__button" onClick={() => toggle()}>
      <div className={ isOpen ? "nav-toggle__icon nav-toggle__icon--open" : "nav-toggle__icon"}></div>
    </button>
  );
}

export default NavToggle;