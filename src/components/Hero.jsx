import React from "react";

import Button from "./Button";

function Hero() {

  return (
    <div className="hero">
      <img className="hero__background" src="/assets/images/hero-background.jpg" alt="" />
      <div className="hero-content">
        <h1 className="hero__title">Power up your space with Kirby Electric </h1>
        <p className="hero__subhead">Efficient and Safe Electrical Solutions for Every Setting</p>
        <Button className={"secondary hero__cta"} clickHandler={() => {}} text={"Get a Free Consultation"} />
      </div>
    </div>
  );
}

export default Hero;