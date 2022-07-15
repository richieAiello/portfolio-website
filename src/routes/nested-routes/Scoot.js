import Banner from '../../components/banner/Banner';
import DetailsSection from '../../components/details-section/DetailsSection';
import DetailsContext from '../../components/details-section/DetailsContext';
import DetailsPreview from '../../components/details-section/DetailsPreview';
import Carousel from '../../components/carousel-section/Carousel';

export default function Scoot(props) {
  return (
    <>
      <Banner title="scoot" />
      <DetailsSection>
        <DetailsContext
          title="scoot"
          text={`
            A 4 page design containing an extensive amount of positioning with SCSS. 
            This project has highly responsive and visually pleasing layouts, and comes 
            equipped with an animated mobile navigation menu as well. 
          `}
          processText={`JavaScript / SCSS / HTML / Parcel / Figma / Frontend Mentor`}
        />
        <DetailsPreview title="scoot" />
      </DetailsSection>
      <Carousel title="scoot" />
    </>
  );
}
