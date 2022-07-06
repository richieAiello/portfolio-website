import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // on page refresh
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return <>{props.children}</>;
}
