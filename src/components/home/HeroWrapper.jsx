export default function HeroWrapper(props) {
  return (
    <section className="hero__wrapper fade-in-hero">
      {props.children}
    </section>
  );
}
