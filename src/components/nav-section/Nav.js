import { useState, useEffect } from "react";
import Logo from "jsx:../../assets/logo.svg";
import HamburgerBtn from "./HambugerBtn";
import NavMenu from "./NavMenu";
import NavShadow from "./NavShadow";
import clsx from "clsx";

export default function Nav(props) {
  const [menuVisibile, setMenuVisibile] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Logo />
        {/* Hidden with css on larger screens */}
        <HamburgerBtn
          // classesTop={clsx({
            
          // })}
          // classesBottom={clsx({
            
          // })}
        />
        {/* Revealed with css on larger screens */}
        <NavMenu 
          classes={clsx({
            "hidden": hidden
          })}
        />
        {/* Hidden with css on larger screens */}
        <NavShadow 
          classes={clsx({ 
            "hidden": hidden
          })}
        />
      </nav>
    </header>
  );
}