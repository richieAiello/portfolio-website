import Icon from 'jsx:../../assets/icons/down-arrows.svg';

const HeroBtn = props => {
  return (
    <button
      type="button"
      className="btn btn--hero link"
      aria-label="Scroll to about section."
      onClick={props.onClick}
    >
      <span className="btn--hero__wrapper">
        <Icon className="btn--hero__icon" />
      </span>
      <span className="btn--hero__text">About Me</span>
    </button>
  );
};

export default HeroBtn;
