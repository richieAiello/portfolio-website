import Hero from '../components/home/Hero';
import AboutInfo from '../components/home/AboutInfo';
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
    <main className="main">
      <Hero onClick={handleAboutScroll} />
      <AboutInfo ref={aboutSectionRef} />
      <Collaboration />
    </main>
  );
};

export default Home;
