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
        text={`I’m a junior front-end developer looking for a new role in an exciting company. 
          I focus on writing accessible HTML, using modern CSS practices and writing clean 
          JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
          whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
          and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
          I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
          you to check out my work.`}
        route={true}
        path="/portfolio"
        linkText="View Portfolio"
      />
    </section>
  );
});

export default About;
