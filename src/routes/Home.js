import Hero from "../components/hero-section/Hero";
import About from "../components/about-section/About";
import { useRef } from "react";

export default function Home(props) {
  const aboutSectionRef = useRef(null);

  const handleAboutScroll = () => {
    aboutSectionRef.current.scrollIntoView({
      behavior: "smooth"
    });
  }
  
  return(
    <main className="main main--home">
      <Hero onClick={handleAboutScroll}/>
      <About ref={aboutSectionRef}/>
    </main>
  );
}
