import HeroImage from './HeroImage';
import HeroWrapper from './HeroWrapper';
import HeroHeading from './HeroHeading';
import HeroBtn from './HeroBtn';

const Hero = props => {
  return (
    <div className="hero">
      <HeroImage />
      <HeroWrapper>
        <HeroHeading />
        <HeroBtn onClick={props.onClick} />
      </HeroWrapper>
    </div>
  );
};

export default Hero;
