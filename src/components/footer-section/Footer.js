import { NavLink } from "react-router-dom";
import Logo from "jsx:../../assets/icons/logo.svg";
import IconLink from "../shared/IconLink";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Logo className="logo" />
        <ul className="footer__list">
          <li className="footer__item">
            <NavLink to="/" className="footer__link link">
              Home
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/portfolio" className="footer__link link">
              Portfolio
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/contact" className="footer__link link">
              Contact Me
            </NavLink>
          </li>
        </ul>
        <div className="footer__wrapper--icons">
          <IconLink mod="footer" name="github" />
          <IconLink mod="footer" name="twitter" />
          <IconLink mod="footer" name="linkedin" />
          <IconLink mod="footer" name="frontendmentor" />
        </div>
      </div>
    </footer>
  );
}
