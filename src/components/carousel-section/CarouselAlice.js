import { memo } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

const CarouselAlice = props => {
  return (
    <AliceCarousel
      items={props.items}
      touchTracking={false}
      keyboardNavigation
      disableButtonsControls
      infinite
      autoPlay
      autoPlayInterval={1200}
      autoPlayStrategy="all"
      animationType="fadeout"
      onSlideChanged={props.onSlideChanged}
    />
  );
};

export default memo(CarouselAlice);
