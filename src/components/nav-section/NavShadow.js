export default function NavShadow(props) {
  return (
    <div
      className={`nav__shadow ${props.classes}`}
      onClick={props.onClick}
    ></div>
  );
}
