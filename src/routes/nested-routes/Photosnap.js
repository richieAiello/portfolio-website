import Banner from '../../components/banner/Banner';
import DetailsSection from '../../components/details-section/DetailsSection';
import DetailsContext from '../../components/details-section/DetailsContext';
import DetailsPreview from '../../components/details-section/DetailsPreview';
import Carousel from '../../components/carousel-section/Carousel';

export default function Photosnap(props) {
  return (
    <>
      <Banner title="photosnap" />
      <DetailsSection>
        <DetailsContext
          title="photosnap"
          text={`
            This 4-page design has plenty of CSS-Grid and an accessible, responsive table. Building Photosnap helped sharpen my JavaScript skills and provided me with more multi-page site experience. A perfect site to rebuild with React in the future.
          `}
          processText={`JavaScript / SCSS / HTML / Parcel / Figma / Frontend Mentor`}
        />
        <DetailsPreview title="photosnap" />
      </DetailsSection>
      <Carousel title="photosnap" />
    </>
  );
}
