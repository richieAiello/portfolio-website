import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Site from 'jsx:../../assets/icons/site.svg';
import GitHub from 'jsx:../../assets/icons/github.svg';
import Info from 'jsx:../../assets/icons/info.svg';

const PortfolioCard = ({ heading, image, site, repo, text }) => {
  const [toggle, setToggle] = useState(false);

  // Varients object for framer-motion matching parent container in PortfolioGrid.jsx
  const variantsChild = {
    hidden: {
      scale: 1.5,
      opacity: 0,
      y: 500,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.li
      className="portfolio__card"
      variants={variantsChild}
      tabIndex="0"
    >
      <img src={image} alt="" className="image image--portfolio" />
      <div className="portfolio__wrapper">
        {!toggle && <h1 className="portfolio__heading">{heading}</h1>}
        <div className="portfolio__wrapper--secondary">
          <a
            href={site}
            target="_blank"
            aria-label="View live site."
            className="portfolio__link link"
          >
            <Site
              className={clsx({
                portfolio__icon: !toggle,
                'portfolio__icon--secondary': toggle,
              })}
            />
          </a>
          <a
            href={repo}
            target="_blank"
            aria-label="View site repository."
            className="portfolio__link link"
          >
            <GitHub
              className={clsx({
                portfolio__icon: !toggle,
                'portfolio__icon--secondary': toggle,
              })}
            />
          </a>
          <button
            type="button"
            className="portfolio__link link btn"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle site information."
          >
            <Info
              className={clsx({
                portfolio__icon: !toggle,
                'portfolio__icon--secondary': toggle,
              })}
            />
          </button>
        </div>
      </div>
      {toggle && (
        <div
          className={`portfolio__card--secondary ${clsx({
            'fade-in': toggle,
          })}`}
        >
          <h1 className="portfolio__heading">{heading}</h1>
          <p className="portfolio__text">{text}</p>
        </div>
      )}
    </motion.li>
  );
};

export default PortfolioCard;
