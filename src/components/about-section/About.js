import Context from '../shared/Context';
import image from '../../assets/homepage/desktop/profile-photo.jpeg';
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section className="about container" ref={ref}>
      <img src={image} alt="" className="image image--about" />
      <Context
        mod="about"
        heading="About Me"
        // Rock climbing has been a passion I have been fortunate enough to come by. The sport is consistently difficult,
        // and has taught me just how much I am able to accomplish if I allow myself to learn from my failures.
        text={`I am a junior front-end developer looking for a new role in an exciting company. 
          My front-end tool of choice has been React, using hooks with functional components.
          I focus on writing accessible JSX, and implementing modern ES6 JavaScript practices. 
          When styling my websites I have been utilizing SCSS, with an understanding of modern CSS
          practices ranging from CSS functions, variables, flex-box, CSS-Grid, keyframes, and more
          in order to make my websites as responsive as possible, while keeping cross-browser compatibility
          in mind. I am currently learning Tailwind CSS, with plans to learn Typescript, Redux, and Vite, 
          eventually moving to Next.js to learn back-end development as well. I currently live in Long Island, 
          New York, and I am searching for a remote position, preferably full-time. When I am not coding or 
          reading fantasy novels, you’ll find  me bouldering outdoors. I would love for you to check out
          my work!`}
        route={true}
        path="/portfolio"
        linkText="View Portfolio"
      />
    </section>
  );
});

export default About;
