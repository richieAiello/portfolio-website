import HeroImage from "./HeroImage";
import HeroWrapper from "./HeroWrapper";
import HeroHeading from "./HeroHeading";
import HeroBtn from "./HeroBtn";

export default function Hero(props) {
  return (
    <section className="hero container">
      <HeroImage />
      <HeroWrapper>
        <HeroHeading>
          Richard Aiello Front-End Web Developer
        </HeroHeading>
        <HeroBtn onClick={props.onClick} />
      </HeroWrapper>
    </section>
  );
}
