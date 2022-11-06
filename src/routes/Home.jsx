import Hero from '../components/home/Hero';
import AboutInfo from '../components/home/AboutInfo';
import { useRef } from 'react';

const Home = props => {
  const aboutSectionRef = useRef(null);

  const handleAboutScroll = () => {
    aboutSectionRef.current.scrollIntoView();
  };

  return (
    <main className="main">
      <Hero onClick={handleAboutScroll} />
      <AboutInfo ref={aboutSectionRef} />
    </main>
  );
};

export default Home;
