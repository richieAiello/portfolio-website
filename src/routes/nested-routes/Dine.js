import Banner from "../../components/banner/Banner";
import DetailsSection from "../../components/details-section/DetailsSection";
import DetailsContext from "../../components/details-section/DetailsContext";
import DetailsBackground from "../../components/details-section/DetailsBackground";
import DetailsPreview from "../../components/details-section/DetailsPreview";

export default function Dine(props) {

  return (
    <>
      <Banner title="dine" />
      <DetailsSection>
        <DetailsContext
          title="dine"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          processText="process"
        />
        <DetailsBackground text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <DetailsPreview title="dine" />
      </DetailsSection>
    </>
  );
}