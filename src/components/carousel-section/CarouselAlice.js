import { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

class CarouselAlice extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const dots = document.querySelectorAll(
      '.alice-carousel__dots-item'
    );
    dots.forEach(dot => {
      dot.setAttribute('tabindex', 0);
      dot.addEventListener('keydown', e => {
        e.code === 'Enter' && dot.click();
      });
      dot.addEventListener('mouseover', e => {
        console.log('hovering dot');
      });
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <AliceCarousel
        // ref={this.props.ref}
        items={this.props.items}
        // touchTracking={false}
        keyboardNavigation
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={2000}
        autoPlayStrategy="all"
        animationType="fadeout"
        onSlideChanged={this.props.onSlideChanged}
      />
    );
  }
}

export default CarouselAlice;
