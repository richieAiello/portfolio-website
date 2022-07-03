import Image from "../../assets/homepage/desktop/profile-photo.jpeg";
import AboutContext from "./AboutContext";

export default function About(props) {
  return (
    <section className="about container">
      <img src={Image} alt="" className="image image--about"/>
      <AboutContext />
    </section>
  );
} 