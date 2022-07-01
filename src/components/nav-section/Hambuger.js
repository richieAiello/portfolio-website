export default function Hamburger(props) {
  return (
    <button
      type="button" 
      aria-label="Open and close navigation menu." 
      className="btn btn--hamburger"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span className={props.classesTop} />
      <span className={props.classesBottom} />
    </button>
  );
}