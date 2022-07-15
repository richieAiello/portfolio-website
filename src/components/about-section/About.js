import Context from '../shared/Context';
import image from '../../assets/homepage/desktop/profile-photo.jpeg';
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <div className="about container" ref={ref}>
      <img src={image} alt="" className="image image--about" />
      <Context
        mod="about"
        heading="About Me"
        text={`Hello, I am Richard Aiello, a junior front-end web developer. I have been 
          looking for a new role in an exciting company. I live on Long Island, New York, 
          and I am searching for a remote position, preferably full-time. React has been my preferred
          front-end tool, using hooks with functional components. I focus on writing
          accessible JSX and implementing modern ES6 JavaScript. For styling my websites,
          I have been utilizing SCSS with a strong understanding of the latest CSS practices.
          I aim to build websites that are not only responsive but cross-browser compatible
          as well. Presently, I am learning Tailwind CSS with plans to learn Typescript, Redux,
          and Vite. Another interest of mine is learning Next.js for back-end development.
          During my free time, I enjoy reading fantasy novels and bouldering outdoors.
          I would love for you to check out my work!`}
        route={true}
        path="/portfolio"
        linkText="View Portfolio"
      />
    </div>
  );
});

export default About;
