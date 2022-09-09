import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import Collaboration from '../components/shared-components/Collaboration';

const Portfolio = props => {
  return (
    <main className="main container">
      <PortfolioGrid />
      <Collaboration />
    </main>
  );
};

export default Portfolio;
