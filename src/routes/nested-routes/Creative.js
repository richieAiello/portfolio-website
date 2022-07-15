import Banner from '../../components/banner/Banner';
import DetailsSection from '../../components/details-section/DetailsSection';
import DetailsContext from '../../components/details-section/DetailsContext';
import DetailsPreview from '../../components/details-section/DetailsPreview';
import Carousel from '../../components/carousel-section/Carousel';

export default function Creative(props) {
  return (
    <>
      <Banner title="creative" />
      <DetailsSection>
        <DetailsContext
          title="creative"
          text={`
            Creative is a responsive landing page that helped me gain confidence using CSS-Grid and the position property. This website is very responsive and contains an accessible scrolling list built with Glider.js.
          `}
          processText="JavaScript / Glider.js / SCSS / HTML / Parcel / Figma / Frontend Mentor"
        />
        <DetailsPreview title="creative" />
      </DetailsSection>
      <Carousel title="creative" />
    </>
  );
}
