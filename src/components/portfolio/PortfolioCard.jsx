import { useState } from 'react';
import { motion } from 'framer-motion';

// Each Card needs a button that toggles state to reaveal information about the project
// Use the MyTeam sites about page for reference. Same code as the cards.
// Each card needs a link to it's live site and repository
// Side 1 of card contains screenshot and name of project with both links
// Side 2 contains either an overlay with a dark opaque background or solid background
// Side contains short description on projects.
// Links get absolutely positioned with a z-index high enough to be shown and clickable on both sides.

const PortfolioCard = ({ ...props }) => {
  const [toggle, setToggle] = useState(false);

  // Varients object for framer-motion matching parent container in PortfolioGrid.jsx
  const variantsChild = {
    hidden: {
      scale: 1.5,
      opacity: 0,
      rotate: 45,
      y: 500,
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      y: 0,
    },
  };

  return (
    <motion.li
      className="portfolio__card"
      variants={variantsChild}
      tabIndex="0"
    >
      {/* Render side 2 of card when toggle is true. */}
      <p>Project Name</p>
      <p>Some information!</p>
    </motion.li>
  );
};

export default PortfolioCard;
