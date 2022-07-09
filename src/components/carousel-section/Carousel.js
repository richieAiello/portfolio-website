import { Link } from 'react-router-dom';
import { useEffect, useState, useLayoutEffect } from 'react';
import dataCarousel from './dataCarousel';
import CarouselAlice from './CarouselAlice';

export default function Carousel(props) {
  const [items, setItems] = useState([]);
  const [path, setPath] = useState('');

  const handleDragStart = e => e.preventDefault();

  useLayoutEffect(() => {
    const newItems = [];

    dataCarousel.map(item => {
      if (item.title !== props.title) {
        newItems.push(
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

    setItems([...newItems]);
  }, []);

  useEffect(() => {
    setPath(items[0]?.props.title ?? '');

    const dots = document.querySelectorAll(
      '.alice-carousel__dots-item'
    );
    dots.forEach(dot => {
      dot.setAttribute('tabindex', 0);
      dot.addEventListener('keydown', e => {
        e.code === 'Enter' && e.currentTarget.click();
      });
    });
  }, [items]);

  const handleSlideChanged = () => {
    const imagePath =
      document.querySelector('.__active .image')?.title ?? '';
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
