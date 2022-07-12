import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dataCarousel from './dataCarousel';
import CarouselAlice from './CarouselAlice';

export default function Carousel(props) {
  const handleDragStart = e => e.preventDefault();

  const [items, setItems] = useState(() => {
    const initialItems = [];

    dataCarousel.map(item => {
      if (item.title !== props.title) {
        initialItems.push(
          <img
            path={item.path}
            src={item.src}
            alt=""
            className="image image--carousel"
            onDragStart={handleDragStart}
            role="presentation"
          />
        );
      }
    });

    return initialItems;
  });

  const [path, setPath] = useState(() => items[0].props.path);

  useEffect(() => {
    const dots = document.querySelectorAll(
      '.alice-carousel__dots-item'
    );

    dots.forEach(dot => {
      dot.setAttribute('tabindex', 0);
      dot.addEventListener('keydown', e => {
        e.code === 'Enter' && e.currentTarget.click();
      });
      dot.addEventListener('mouseenter', e => {
        e.currentTarget.click();
      });
    });
  }, []);

  const handleSlideChanged = () => {
    const currentImage = document.querySelector('.__active .image');
    const currentPath = currentImage.getAttribute('path');
    setPath(currentPath);
  };

  const handleLinkHover = e => {
    const activeDot = document.querySelector(
      '.alice-carousel__dots-item.__active'
    );
    activeDot.click();
  };

  return (
    <section className="carousel">
      <h3 className="carousel__heading heading--secondary">
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
        onFocus={handleLinkHover}
      >
        View Project
      </Link>
    </section>
  );
}
