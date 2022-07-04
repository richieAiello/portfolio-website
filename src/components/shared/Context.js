import { Link } from "react-router-dom";

export default function Context({mod, heading, text, path, linkText}) {
  return (
    <section className={`main__context ${mod}__context`}>
      <h2 className={`${mod}__heading heading`}>
        {heading}
      </h2>
      <p className={`${mod}__text`}>
        {text}
      </p>
      <Link to={path} className={`btn btn--${mod} btn--white link`}>
        {linkText}
      </Link>
    </section>
  );
}