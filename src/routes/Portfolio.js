import Project from '../components/project-section/Project';
import ProjectImage from '../components/project-section/ProjectImage';
import Context from '../components/shared/Context';
import Collaboration from '../components/collaboration-section/Collaboration';

export default function Portfolio(props) {
  return (
    <main className="main main--portfolio container">
      <Project>
        <ProjectImage title="designo" />
        <Context
          mod="project"
          heading="Designo"
          text={`
            A 7 page design by Frontend Mentor. Designo is the first website I built with React, 
            outside of the React course I completed. This project helped me to become comfortable 
            using React 18 and React Router v6. I also had the pleasure of working with Formik and Yup
            for form validation with React.
          `}
          route={true}
          path="/details/designo"
          linkText="View Project"
        />
      </Project>
      <Project>
        <ProjectImage title="photosnap" />
        <Context
          mod="project"
          secondary={true}
          heading="Photosnap"
          text={`
            A 4 page design by Frontend Mentor. Photosnap provided me with plenty of JavaScript and
            CSS-Grid challenges. This project taught me the importance of understanding accessiblity 
            when building responsive tables. 
          `}
          route={true}
          path="/details/photosnap"
          linkText="View Project"
        />
      </Project>
      <Project>
        <ProjectImage title="scoot" />
        <Context
          mod="project"
          heading="Scoot"
          text={`
            Another 4 page design by Frontend Mentor. Other than providing me experience building multi-page 
            websites, this project thoroughly allowed me to practice positioning elements with 
            SCSS. This site is highly responsive, with a clean mobile navigation
            menu as well.
          `}
          route={true}
          path="/details/scoot"
          linkText="View Project"
        />
      </Project>
      <Project>
        <ProjectImage title="dine" />
        <Context
          mod="project"
          secondary={true}
          heading="Dine Restaurant"
          text={`
            A 2 page design by Frontend Mentor. A challenging experience at the time, consisting of CSS-Grid, Flexbox,
            positioned elements, and a reservation form for booking tables.
          `}
          route={true}
          path="/details/dine"
          linkText="View Project"
        />
      </Project>
      <Project>
        <ProjectImage title="creative" />
        <Context
          mod="project"
          heading="Creative Agency"
          text={`
            A landing page design by Frontend mentor. At the time, building this website trained me to successfully implement
            a demanding CSS-Grid layout design, as well as create a native scrolling list with Glider.js. 
          `}
          route={true}
          path="/details/creative"
          linkText="View Project"
        />
      </Project>
      <Collaboration />
    </main>
  );
}
