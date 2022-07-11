import { Link } from 'react-router-dom';
import GitHub from 'jsx:../../assets/icons/github.svg';

export default function Context({
  mod,
  secondary,
  heading,
  text,
  process,
  processText,
  route,
  link,
  linkText,
  repo,
  repoPath,
  path,
  children,
}) {
  return (
    <section
      className={`main__context ${mod}__context${
        secondary ? '--secondary' : ''
      }`}
    >
      <h2 className={`${mod}__heading heading`}>{heading}</h2>
      <p className={`${mod}__text`}>{text}</p>
      {process && (
        <p className={`${mod}__text--secondary`}>{processText}</p>
      )}
      {repo && (
        <a
          href={repoPath}
          target="_blank"
          className={`${mod}__link--icon link`}
          aria-label="View site repository on github."
        >
          <GitHub className="icon" />
        </a>
      )}
      {route && (
        <Link to={path} className={`btn btn--${mod} btn--white link`}>
          {linkText}
        </Link>
      )}
      {link && (
        <a
          href={path}
          target="_blank"
          className={`btn btn--${mod} btn--white link`}
        >
          {linkText}
        </a>
      )}
      {children}
    </section>
  );
}
