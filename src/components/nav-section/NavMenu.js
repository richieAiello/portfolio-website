import { NavLink } from 'react-router-dom';

export default function NavMenu(props) {
  return (
    <div className={`nav__menu ${props.classes}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link link"
            onClick={props.onClick}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/portfolio"
            className="nav__link link"
            onClick={props.onClick}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            className="nav__link link"
            onClick={props.onClick}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
