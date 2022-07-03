import HeroImage from "./HeroImage";
import HeroContext from "./HeroContext";

export default function Hero(props) {
  return (
    <section className="hero container">
       <HeroImage />
       <HeroContext 
        heading="Welcome, I am Richard Aiello a front-end web developer"
       />
    </section>
  );
}