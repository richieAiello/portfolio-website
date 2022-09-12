import { Link } from 'react-router-dom';

const Collaboration = props => {
  return (
    <section className="collaboration">
      <h3 className="collaboration__heading heading">
        Interested in communicating with me?
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
