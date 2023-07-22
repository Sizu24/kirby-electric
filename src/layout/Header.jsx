import Nav from "./Nav";

function Header(colorMode) {
  return (
    <>
      <header className="header">
        <img
          src="../src/assets/images/main-logo.png"
          alt=""
          className="header__logo"
        />
        <Nav color={colorMode}/>
      </header>
    </>
  );
}

export default Header;
