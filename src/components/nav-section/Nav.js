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
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(false);

  /* Triggers an asynchronous function after 400ms with the following actions.
  Hamburger button will re-enable. Animation classes will be cleaned up using 
  state and clsx. If menuVisibile is false, hide menu after animations complete. 
  Timeout will only trigger if hamburger button is clicked, based on the 
  menuVisible dependancy. Timeout will be cleaned up on effect completion. */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);
  
      animateIn && setAnimateIn(false);
      animateOut && setAnimateOut(false);

      !menuVisibile && setHidden(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [menuVisibile]);

  /* Disables the hamburger button. 
  Toggles the menuVisible state variable.
  If hidden was true, reveals the menu.
  Chooses whether to animate in or out based on
  the menuVisible state variable. */
  const handleHamburgerClick = e => {
    setDisabled(true);
    setMenuVisibile(!menuVisibile);
    hidden && setHidden(false);
    
    menuVisibile ?
    setAnimateOut(true) :
    setAnimateIn(true);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <Logo />
        {/* Hidden with css on larger screens */}
        <HamburgerBtn
          disabled={disabled}
          onClick={handleHamburgerClick}
          classesTop={clsx({"flip-top": menuVisibile})}
          classesBottom={clsx({"flip-bottom": menuVisibile})}
        />
        {/* Revealed with css on larger screens */}
        <NavMenu 
          classes={clsx({
            "hidden": hidden,
            "slide-in": animateIn,
            "slide-out": animateOut
          })}
        />
        {/* Hidden with css on larger screens */}
        <NavShadow 
          classes={clsx({ 
            "hidden": hidden,
            "fade-in": animateIn,
            "fade-out": animateOut
          })}
        />
      </nav>
    </header>
  );
}