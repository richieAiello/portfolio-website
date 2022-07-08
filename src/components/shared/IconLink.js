import linkData from "./linkData";

const IconLink = ({ mod, name }) => {
  let icon;

  linkData.filter(obj => obj.name === name && (icon = obj));

  return (
    <a
      href={icon.url}
      target="_blank"
      className={`${mod}__link--icon link"`}
      aria-label="Visit my GitHub profile."
    >
      {icon.svg}
    </a>
  );
}

export default IconLink;