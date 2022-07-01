import Logo from "jsx:../../assets/logo.svg";
import NavMenu from "./NavMenu";
import Hamburger from "./Hambuger";
import clsx from "clsx";

export default function Nav(props) {
  return (
    <header className="header">
      <nav className="nav container">
        <Logo />
        <Hamburger 
          classesTop={clsx({
            "hamburger": true,
            "hamburger--top": true
          })}
          classesBottom={clsx({
            "hamburger": true,
            "hamburger--bottom": true
          })}
        />
        <NavMenu 
          classes={clsx({
            "nav__menu": true,
            "hidden": true
          })}
        />
      </nav>
    </header>
  );
}