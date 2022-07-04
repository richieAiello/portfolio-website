import Image from "../../assets/homepage/desktop/profile-photo.jpeg";
import AboutContext from "./AboutContext";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section className="about container" ref={ref}>
      <img src={Image} alt="" className="image image--about"/>
      <AboutContext />
    </section>
  );
});

export default About;