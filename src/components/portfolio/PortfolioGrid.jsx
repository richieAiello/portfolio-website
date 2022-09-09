import { useState, useEffect } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import axios from 'axios';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

const PortfolioGrid = props => {
  // const [data, setData] = useState([]);
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1440px)');

  // useEffect(() => {
  //   axios.get('../../data.json').then(response => {
  //     setData([...response.data]);
  //   });
  // }, []);

  // temporary data
  const data = [0, 1, 2, 3];

  // Varients object for framer-motion matching child component in PortfolioCard.jsx
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
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
    // <>
    //   {!tablet && !desktop && (
    //     <motion.div className="portfolio"></motion.div>
    //   )}
    //   {tablet && !desktop && (
    //     <motion.div className="portfolio"></motion.div>
    //   )}
    //   {desktop && <motion.div className="portfolio"></motion.div>}
    // </>
    <motion.ul
      className="portfolio"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {data.map(item => {
        return <PortfolioCard key={item.index} />;
      })}
    </motion.ul>
  );
};

export default PortfolioGrid;
