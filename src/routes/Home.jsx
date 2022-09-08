import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Collaboration from '../components/shared-components/Collaboration';
import { useRef } from 'react';

const Home = props => {
  const aboutSectionRef = useRef(null);

  const handleAboutScroll = () => {
    aboutSectionRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <main className="main main--home">
      <Hero onClick={handleAboutScroll} />
      <About ref={aboutSectionRef} />
      <Collaboration />
    </main>
  );
};

export default Home;
