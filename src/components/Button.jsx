import React from "react";

function Button({className, clickHandler, text}) {
  return (
    <button className={`button-${className}`} onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;