import { NavLink } from "react-router-dom";
import Logo from "jsx:../../assets/logo.svg";
import GitHub from "jsx:../../assets/icons/github.svg";
import Twitter from "jsx:../../assets/icons/twitter.svg";
import LinkedIn from "jsx:../../assets/icons/linkedin.svg";
import FrontendMentor from "jsx:../../assets/icons/frontendmentor.svg";

export default function Footer(props) {
  return(
    <footer className="footer">
      <div className="footer__wrapper container">
        <Logo />
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
            className="footer__link--icon link"
            aria-label="Visit my GitHub profile."  
          >
            <GitHub />
          </a>
          <a 
            href="https://twitter.com/richieAiello" 
            className="footer__link--icon link"
            aria-label="Contact me on Twitter."  
          >
            <Twitter />
          </a>
          <a 
            href="https://twitter.com/richieAiello" 
            className="footer__link--icon link"
            aria-label="View my LinkedIn profile."  
          >
            <LinkedIn />
          </a>
          <a 
            href="https://www.frontendmentor.io/profile/richieAiello" 
            className="footer__link--icon link"
            aria-label="Visit my Frontend Mentor profile."  
          >
            <FrontendMentor />
          </a>
        </div>
      </div>
    </footer>
  );
}