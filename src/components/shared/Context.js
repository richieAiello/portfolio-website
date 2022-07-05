import { Link } from "react-router-dom";

export default function Context({
  mod,
  secondary,
  heading,
  text,
  process,
  processText,
  route,
  link,
  path,
  linkText,
}) {
  return (
    <section className={`main__context ${mod}__context${secondary ? "--secondary" : ""}`}>
      <h2 className={`${mod}__heading heading`}>{heading}</h2>
      <p className={`${mod}__text`}>{text}</p>
      {process && 
        <p className={`${mod}__text--secondary`}>{processText}</p>
      }
      {route &&
        <Link to={path} className={`btn btn--${mod} btn--white link`}>
         {linkText}
        </Link>
      }
      {link &&
        <a href={path} target="_blank" className={`btn btn--${mod} btn--white link`}>
         {linkText}
        </a>
      }
    </section>
  );
}
