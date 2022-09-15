import { NavLink } from 'react-router-dom';

const NavMenu = ({ className, onClick }) => {
  return (
    <div className={`nav__menu ${className}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link link"
            onClick={onClick}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/portfolio"
            className="nav__link link"
            onClick={onClick}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            className="nav__link link"
            onClick={onClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
