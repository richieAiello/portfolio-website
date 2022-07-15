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
            A 7-page design by Frontend Mentor, Designo is the first website I built with React outside the React course I completed. This project helped me to become comfortable using React 18 and React Router v6. Furthermore, I had the pleasure of working with Formik and Yup for form validation.
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
            Photosnap is a 4-page design by Frontend Mentor that provided me with plenty of JavaScript and CSS-Grid challenges. This project taught me the importance of understanding accessibility when building responsive tables.
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
            Scoot is a 4-page design by Frontend Mentor. As well as providing me with experience building multi-page websites, this project thoroughly allowed me to practice positioning elements with SCSS. This website is highly responsive and has a clean mobile navigation menu.
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
            Dine is a 2-page design provided by Frontend Mentor. Building this project was a challenging experience at the time. Dine's code contains CSS-Grid, Flexbox, positioned elements, and a reservation form for booking tables. There are some animations in the event section as well.
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
            Creative is a landing page design by Frontend Mentor. Building this website trained me to implement a demanding CSS-Grid layout. This project also contains a native scrolling list with Glider.js. 
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
