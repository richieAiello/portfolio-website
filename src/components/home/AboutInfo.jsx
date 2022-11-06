import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image from '../../assets/homepage/desktop/profile-photo.jpeg';

const AboutInfo = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <motion.div
        className="about__wrapper container"
        initial={{
          opacity: 0,
          x: '-25vw',
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <img src={image} alt="" className="image image--about" />
        <section className="main__context about__context">
          <h2 className="about__heading heading--secondary">
            About Me
          </h2>
          <p className="about__text">
            I am Richard Aiello, a self-taught front-end web developer
            with over a year of experience. I currently live in Long
            Island, New York, and I'm searching for a remote position
            in a welcoming company, ideally full-time. React has been
            my preferred front-end tool, using hooks with functional
            components. I focus on writing accessible JSX while
            implementing modern JavaScript practices. For styling
            websites, I use a mix of TailwindCSS and CSS. I also have
            experience styling with SCSS and the BEM naming
            convention.
          </p>
          <p className="about__text">
            I thoroughly enjoy reading fantasy novels, healthy
            cooking, and bouldering outdoors during my free time.
            Maintaining a healthy lifestyle, both physically and
            mentally, keeps me opening my code editor with a smile!
            Please feel free to browse my portfolio and contact me!
          </p>
          <div className="about__wrapper--secondary">
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
    </div>
  );
});

export default AboutInfo;
