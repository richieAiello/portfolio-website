import { Link } from 'react-router-dom';

const Collaboration = props => {
  return (
    <section className="collaboration container">
      <h3 className="collaboration__heading heading">
        Interested in hiring me, or collaborating?
      </h3>
      <Link
        to="/contact"
        className="btn btn--white btn--collaboration link"
      >
        Contact Me
      </Link>
    </section>
  );
};

export default Collaboration;
