import React from "react";
import './slider.css';
import { Carousel } from 'react-bootstrap';

class Slider extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
      
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img src={require("/Users/wuaiwei/Desktop/personal-portfolio/src/components/slider/images/Soccer.jpg")} alt="1"/>
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={require("/Users/wuaiwei/Desktop/personal-portfolio/src/components/slider/images/Soccer.jpg")} alt="2"/>
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={require("/Users/wuaiwei/Desktop/personal-portfolio/src/components/slider/images/Soccer.jpg")} alt="3" />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
//   render(<ControlledCarousel />);



export default Slider;