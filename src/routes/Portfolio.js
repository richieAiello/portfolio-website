import Project from "../components/project-section/Project";
import ProjectImage from "../components/project-section/ProjectImage";
import Context from "../components/shared/Context"

export default function Portfolio(props) {
  return (
    <main className="main main--portfolio container">
      <Project mod="">
        <ProjectImage title="designo"/>
        <Context
          mod="project"
          secondary={true}
          heading="Designo"
          text={`
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          `}
          link={true}
          path="https://designo-website-richieaiello.netlify.app/"
          linkText="Visit Website"
        />
      </Project>
    </main>
  );
}
