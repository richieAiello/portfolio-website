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
            Designo is a 7-page website built with React 18 and navigated by React Router v6. 
            Formik and Yup handle client-side form validation. I was required to have extensive 
            knowledge of CSS-Grid and positioning elements to build this website. This project 
            uplifted my confidence in organizing multi-page layouts.
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
