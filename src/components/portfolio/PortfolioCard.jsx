import { motion } from 'framer-motion';

const PortfolioCard = props => {
  // temporary card

  // Varients object for framer-motion matching parent container in PortfolioGrid.jsx
  const child = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.li className="portfolio__card" variants={child}>
      <p>Project Name</p>
      <p>Some information!</p>
    </motion.li>
  );
};

export default PortfolioCard;
