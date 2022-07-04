import HeroImage from "./HeroImage";
import HeroContext from "./HeroContext";
import HeroHeading from "./HeroHeading";
import HeroBtn from "./HeroBtn";

export default function Hero(props) {
  return (
    <section className="hero container">
      <HeroImage />
      <HeroContext>
        <HeroHeading>
          Richard Aiello Front-End Web Developer
        </HeroHeading>
        <HeroBtn onClick={props.onClick} />
      </HeroContext>
    </section>
  );
}
