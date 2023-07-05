import Nav from "./Nav";

function Header() {
  return (
    <>
      <header className="header">
        <img
          src="../src/assets/images/main-logo.png"
          alt=""
          className="header__logo"
        />
        <Nav />
      </header>
    </>
  );
}

export default Header;
