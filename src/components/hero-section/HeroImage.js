import mobile from "../../assets/homepage/mobile/image-homepage-hero@2x.jpg"
import tablet from "../../assets/homepage/tablet/image-homepage-hero@2x.jpg";
import desktop from "../../assets/homepage/desktop/image-homepage-hero@2x.jpg";

export default function HeroImage(props) {
  return (
    <picture>
      <source srcSet={desktop} media="(min-width: 1440px)" />
      <source srcSet={tablet} media="(min-width: 768px)" />
      <img src={mobile} alt="" className="image image--hero" />
    </picture>
  );
}