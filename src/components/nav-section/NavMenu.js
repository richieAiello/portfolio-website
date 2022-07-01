import { NavLink } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <div className={props.classes}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link link">
            Home
          </NavLink>
          <NavLink to="/portfolio" className="nav__link link">
            Portfolio
          </NavLink>
          <NavLink to="/contact" className="nav__link link">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </div>
  );
}