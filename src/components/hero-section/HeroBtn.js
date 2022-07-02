import Icon from "jsx:../../assets/icons/down-arrows.svg";

export default function HeroBtn(props) {
  return (
    <a href="#about" className="btn btn--hero link">
      <Icon className="btn--hero__icon" />
      <span className="btn--hero__text">About Me</span>
    </a>
  );
}