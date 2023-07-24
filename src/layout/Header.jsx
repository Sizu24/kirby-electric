import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import NavToggle from "../components/NavToggle";
import NavMobile from "./NavMobile";

function Header(colorMode) {

  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <header className="header">
        <img
          src="/kirby-electric/assets/images/main-logo.png"
          alt="Kirby Electric logo"
          className="header__logo"
        />
        <NavToggle toggle={handleClick} isOpen={navOpen} />
        <Nav color={colorMode}/>
        <NavMobile isOpen={navOpen} />
      </header>
    </>
  );
}

export default Header;
