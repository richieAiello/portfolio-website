export default function DetailsBackground({ text }) {
  return (
    <section className="background">
      <h3 className="background__heading heading--secondary">
        Project Background
      </h3>
      <p className="background__text">{text}</p>
    </section>
  );
}
