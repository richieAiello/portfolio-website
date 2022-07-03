import HeroBtn from "./HeroBtn";

export default function HeroContext({heading}) {
  return (
    <div className="hero__context">
      <h1 className="hero__heading heading">
        {heading}
      </h1>
      <HeroBtn />
    </div>
  );
}