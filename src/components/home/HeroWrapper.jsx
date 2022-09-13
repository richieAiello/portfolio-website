import useMediaQuery from '../../hooks/useMediaQuery';
import clsx from 'clsx';

export default function HeroWrapper(props) {
  const tablet = useMediaQuery('(min-width: 768px)');

  return (
    <section
      className={`hero__wrapper ${clsx({
        container: !tablet,
      })}`}
    >
      <div className="hero__wrapper--secondary">{props.children}</div>
    </section>
  );
}
