import data from "../../components/details-section/data";
import Banner from "../../components/banner/Banner";
import DetailsSection from "../../components/details-section/DetailsSection";
import DetailsContext from "../../components/details-section/DetailsContext";
import DetailsBackground from "../../components/details-section/DetailsBackground";
import DetailsPreview from "../../components/details-section/DetailsPreview";
import FlipPage from "../../components/flip-page-section/FlipPage";

export default function Designo(props) {
  console.log(data);

  return (
    <>
      <Banner title="designo" />
      <DetailsSection>
        <DetailsContext
          title="designo"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          processText="process"
        />
      </DetailsSection>
    </>
  );
}
