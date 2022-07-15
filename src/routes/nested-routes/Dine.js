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
            Dine is a 2-page website consisting of CSS-Grid, Flexbox, positioned elements, and a reservation form for booking tables. JustValidate handles form validation on the client-side. Additionally, the events section on the home page is interactive and animated with keyframes. I learned much about cross-browser compatibility with animations through building this website. 
          `}
          processText={`JavaScript / JustValidate / SCSS / HTML / Parcel / Figma / Frontend Mentor`}
        />
        <DetailsPreview title="dine" />
      </DetailsSection>
      <Carousel title="dine" />
    </>
  );
}
