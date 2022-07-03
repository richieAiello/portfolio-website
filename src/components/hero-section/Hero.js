import HeroImage from "./HeroImage";
import HeroContext from "./HeroContext";

export default function Hero(props) {
  return (
    <section className="hero container">
       <HeroImage />
       <HeroContext 
        heading="Richard Aiello Front-End Web Developer"
       />
    </section>
  );
}