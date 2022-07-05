import { NavLink } from "react-router-dom";
import Logo from "jsx:../../assets/icons/logo.svg";
import GitHub from "jsx:../../assets/icons/github.svg";
import Twitter from "jsx:../../assets/icons/twitter.svg";
import LinkedIn from "jsx:../../assets/icons/linkedin.svg";
import FrontendMentor from "jsx:../../assets/icons/frontendmentor.svg";

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
          <a
            href="https://github.com/richieAiello"
            target="_blank"
            className="footer__link--icon link"
            aria-label="Visit my GitHub profile."
          >
            <GitHub className="footer__icon" />
          </a>
          <a
            href="https://twitter.com/richieAiello"
            target="_blank"
            className="footer__link--icon link"
            aria-label="Contact me on Twitter."
          >
            <Twitter className="footer__icon" />
          </a>
          <a
            href="#"
            target="_blank"
            className="footer__link--icon link"
            aria-label="View my LinkedIn profile."
          >
            <LinkedIn className="footer__icon" />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/richieAiello"
            target="_blank"
            className="footer__link--icon link"
            aria-label="Visit my Frontend Mentor profile."
          >
            <FrontendMentor className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
