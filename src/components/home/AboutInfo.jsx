import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image from '../../assets/homepage/desktop/profile-photo.jpeg';

const AboutInfo = forwardRef((props, ref) => {
  return (
    <motion.div
      className="about container"
      ref={ref}
      initial={{
        opacity: 0,
        x: -500,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ delay: 0.35, duration: 0.5 }}
    >
      <img src={image} alt="" className="image image--about" />
      <section className="main__context about__context">
        <h2 className="about__heading heading--secondary">
          About Me
        </h2>
        <p className="about__text">
          I am Richard Aiello, a self-taught front-end web developer
          with over a year of experience. I currently live on Long
          Island, New York, and I'm searching for a remote position in
          a welcoming company, ideally full-time. React has been my
          preferred front-end tool, using hooks with functional
          components. I focus on writing accessible JSX while
          implementing modern JavaScript. For styling websites, I use
          a mix of TailwindCSS and CSS3 while applying the BEM naming
          convention. I also have experience styling with SCSS.
          Presently, I am learning React Redux with plans to learn
          Typescript after! I thoroughly enjoy reading fantasy novels,
          healthy cooking, and bouldering outdoors during my free
          time. Maintaining a healthy lifestyle, both physically and
          mentally, keeps me opening my code editor with a smile!
          Please feel free to browse my portfolio and contact me!
        </p>
        <div className="about__wrapper">
          <Link
            to="portfolio"
            className="btn btn--about btn--white link"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="btn btn--about btn--white link"
          >
            Contact
          </Link>
        </div>
      </section>
    </motion.div>
  );
});

export default AboutInfo;
