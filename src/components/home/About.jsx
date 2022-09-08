import Context from '../shared-components/Context';
import image from '../../assets/homepage/desktop/profile-photo.jpeg';
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <div className="about container" ref={ref}>
      <img src={image} alt="" className="image image--about" />
      <Context
        mod="about"
        heading="About Me"
        text={`	
          Hello, I am Richard Aiello, a self-taught junior front-end web developer. I currently live on Long Island, New York, and I'm searching for a remote position in an exciting company, ideally full-time.
          React has been my preferred front-end tool, using hooks with functional components. I focus on writing accessible JSX while implementing modern JavaScript. For styling my websites, I have been using TailwindCSS and SCSS to build projects that are not only responsive but cross-browser compatible. Vite is my favored build tool, with Parcel being a close second. 
          Presently, I am learning React Redux with plans to learn Typescript after. Learning Next.js for back-end development is another skill that interests me. I enjoy reading fantasy novels, healthy cooking, and bouldering outdoors during my free time. Please feel free to browse my portfolio!`}
        route={true}
        path="/portfolio"
        linkText="View Portfolio"
      />
    </div>
  );
});

export default About;
