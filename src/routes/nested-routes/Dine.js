import Banner from '../../components/banner/Banner';
import DetailsSection from '../../components/details-section/DetailsSection';
import DetailsContext from '../../components/details-section/DetailsContext';
import DetailsPreview from '../../components/details-section/DetailsPreview';
import Carousel from '../../components/carousel-section/Carousel';

export default function Dine(props) {
  return (
    <>
      <Banner title="dine" />
      <DetailsSection>
        <DetailsContext
          title="dine"
          text={`
            A 2 page website consisting of CSS-Grid, Flexbox, positioned elements, and a reservation form for 
            booking tables. Form validation on the client side was handled with the JustValidate npm
            package. The events section on the home page is interactive and animated with keyframes as well. 
          `}
          processText={`JavaScript / JustValidate / SCSS / HTML / Parcel / Figma / Frontend Mentor`}
        />
        <DetailsPreview title="dine" />
      </DetailsSection>
      <Carousel title="dine" />
    </>
  );
}
