import Banner from '../../components/banner/Banner';
import DetailsSection from '../../components/details-section/DetailsSection';
import DetailsContext from '../../components/details-section/DetailsContext';
import DetailsPreview from '../../components/details-section/DetailsPreview';
import Carousel from '../../components/carousel-section/Carousel';

export default function Designo(props) {
  return (
    <>
      <Banner title="designo" />
      <DetailsSection>
        <DetailsContext
          title="designo"
          text={`
            A 7 page design built with React 18, and navigated by React Router v6.
            From extensive CSS-Grid and positioning challenges, to form validation with Formik and Yup, building
            this site uplifted my confidence organizing multi page layouts.
          `}
          processText={`
            React 18 / React Router v6 / SCSS / Parcel / Formik / Yup / Figma / Frontend Mentor
          `}
        />
        <DetailsPreview title="designo" />
      </DetailsSection>
      <Carousel title="designo" />
    </>
  );
}
