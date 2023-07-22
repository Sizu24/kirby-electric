import { Link } from "react-router-dom";
import Button from "../components/Button";

function Nav(color) {
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <Link to="/" className={color.color.colorMode === "dark" ? "nav-list__item-link nav-list__item-link--dark" : "nav-list__item-link"}>
              Home
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/services" className={color.color.colorMode === "dark" ? "nav-list__item-link nav-list__item-link--dark" : "nav-list__item-link"}>
              Services
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/gallery" className={color.color.colorMode === "dark" ? "nav-list__item-link nav-list__item-link--dark" : "nav-list__item-link"}>
              Gallery
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/about" className={color.color.colorMode === "dark" ? "nav-list__item-link nav-list__item-link--dark" : "nav-list__item-link"}>
              About
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/contact" className={color.color.colorMode === "dark" ? "nav-list__item-link nav-list__item-link--dark" : "nav-list__item-link"}>
              <Button className={'light'} clickHandler={() => {}} text={'Contact Us'}/>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
