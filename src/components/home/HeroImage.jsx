import { motion } from 'framer-motion';
import mobile from '../../assets/homepage/mobile/hero-bg.jpg';
import tablet from '../../assets/homepage/tablet/hero-bg.jpg';
import desktop from '../../assets/homepage/desktop/hero-bg.jpg';

export default function HeroImage(props) {
  return (
    <picture>
      <source srcSet={desktop} media="(min-width: 1440px)" />
      <source srcSet={tablet} media="(min-width: 480px)" />
      <motion.img
        initial={{
          y: 'calc(-100vh + 5rem)',
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.75,
        }}
        src={mobile}
        alt=""
        className="image image--hero"
      />
    </picture>
  );
}
