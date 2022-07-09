import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dataCarousel from './dataCarousel';
import CarouselAlice from './CarouselAlice';

export default function Carousel(props) {
  const [path, setPath] = useState('');

  const handleDragStart = e => e.preventDefault();

  const items = [];

  dataCarousel.map(item => {
    if (item.title !== props.title) {
      items.push(
        <img
          title={item.path}
          src={item.src}
          alt=""
          className="image image--carousel"
          onDragStart={handleDragStart}
          role="presentation"
        />
      );
    }
  });

  useEffect(() => {
    const imagePath =
      document.querySelector('.__active .image').title ?? '';
    setPath(imagePath);
  }, []);

  const handleSlideChanged = () => {
    const imagePath =
      document.querySelector('.__active .image').title ?? '';
    setPath(imagePath);
  };

  const handleLinkHover = e => {
    const activeDot = document.querySelector(
      '.alice-carousel__dots-item.__active'
    );
    activeDot.click();
  };

  return (
    <section className="carousel">
      <h3 className="carousel__heading heading">
        Browse My Portfolio
      </h3>
      <CarouselAlice
        items={items}
        onSlideChanged={handleSlideChanged}
      />
      <Link
        to={path}
        className="btn btn--white btn--carousel link"
        onMouseEnter={handleLinkHover}
      >
        View Project
      </Link>
    </section>
  );
}
