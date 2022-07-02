export default function HamburgerBtn(props) {
  return (
    <button
      type="button" 
      aria-label="Open and close navigation menu." 
      className="btn btn--hamburger"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span className={`hamburger hamburger--top ${props.classesTop}`} />
      <span className={`hamburger hamburger--bottom ${props.classesBottom}`} />
    </button>
  );
}