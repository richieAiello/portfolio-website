import Project from "../components/project-section/Project";
import ProjectImage from "../components/project-section/ProjectImage";
import Context from "../components/shared/Context";
import Collaboration from "../components/collaboration-section/Collaboration";

export default function Portfolio(props) {
  return (
    <main className="main main--portfolio container">
      <Project>
        <ProjectImage title="designo"/>
        <Context
          mod="project"
          heading="Designo"
          text={`
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          `}
          route={true}
          path="/details"
          linkText="View Project"
        />
      </Project>
      <Project>
        <ProjectImage title="photosnap"/>
        <Context
          mod="project"
          secondary={true}
          heading="Photosnap"
          text={`
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          `}
          route={true}
          path="/details"
          linkText="View Project"
        />
      </Project>
      <Project>
        <ProjectImage title="scoot"/>
        <Context
          mod="project"
          heading="Scoot"
          text={`
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          `}
          route={true}
          path="/details"
          linkText="View Project"
        />
      </Project>
      <Project>
        <ProjectImage title="dine"/>
        <Context
          mod="project"
          secondary={true}
          heading="Dine Restaurant"
          text={`
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          `}
          route={true}
          path="/details"
          linkText="View Project"
        />
      </Project>
      <Project>
        <ProjectImage title="creative-agency"/>
        <Context
          mod="project"
          heading="Creative Agency"
          text={`
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          `}
          route={true}
          path="/details"
          linkText="View Project"
        />
      </Project>
      <Collaboration />
    </main>
  );
}
