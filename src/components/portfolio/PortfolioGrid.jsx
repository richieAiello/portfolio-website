import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import data from './data';

const PortfolioGrid = props => {
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1440px)');

  // Varients object for framer-motion matching child component in PortfolioCard.jsx
  const variantsParent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // data.map return a PortfolioCard component for each item in data.
  // Look into framer-motion for animating cards or animate manually.
  // Cards need to fade or slide in one after another.
  // Set different animations for different screens using conditional rendering and useMediaQuery hook.
  return (
    <motion.ul
      className="portfolio"
      variants={variantsParent}
      initial="hidden"
      animate="show"
    >
      {data.map(item => {
        return (
          <PortfolioCard
            key={item.id}
            heading={item.heading}
            image={item.image}
          />
        );
      })}
    </motion.ul>
  );
  // <>
  //   {!tablet && !desktop && (
  //     <motion.div className="portfolio"></motion.div>
  //   )}
  //   {tablet && !desktop && (
  //     <motion.div className="portfolio"></motion.div>
  //   )}
  //   {desktop && <motion.div className="portfolio"></motion.div>}
  // </>
};

export default PortfolioGrid;
