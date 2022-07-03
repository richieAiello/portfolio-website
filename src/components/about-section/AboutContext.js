import { Link } from "react-router-dom";

export default function AboutContext(props) {
  return (
    <div className="about__context">
      <h2 className="about__heading heading">About Me</h2>
      <p className="about__text">
        I’m a junior front-end developer looking for a new role in an exciting company. 
        I focus on writing accessible HTML, using modern CSS practices and writing clean 
        JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
        whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
        and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
        I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
        you to check out my work.
      </p>
      <Link to="/portfolio" className="btn btn--portfolio link">
        View My Portfolio
      </Link>
    </div>
  );
}