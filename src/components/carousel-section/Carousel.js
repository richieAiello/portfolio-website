import { Link } from "react-router-dom";
import data from "./data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

export default function Carousel(props) {

  const handleDragStart = e => e.preventDefault();

  const items = [];

  data.map(item => {
    if (item.title !== props.title) items.push(
      <div className="carousel__wrapper" onDragStart={handleDragStart} role="presentation">
        <div className="carousel__slide">
          <img src={item.src} alt="" className="image image--carousel" />
        </div>
        <Link to={item.path} className="btn btn--white btn--carousel link">View Project</Link>
      </div>
    )
  });

  return (
    <section className="carousel">
      <h3 className="carousel__heading heading">Browse My Portfolio</h3>
      <AliceCarousel 
        items={items}
        mouseTracking  
        keyboardNavigation
        disableButtonsControls
      />
    </section>
  );
}
