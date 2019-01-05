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
            <Carousel.Caption>
              <p class="thick">A Place to Play and Exercise Together</p>
            </Carousel.Caption>
          <img src={require("/Users/wuaiwei/Desktop/personal-portfolio/src/components/slider/images/Slideshow_1.jpg")} alt="1"/>
          </Carousel.Item>
          <Carousel.Item>
          <img src={require("/Users/wuaiwei/Desktop/personal-portfolio/src/components/slider/images/Slideshow_2.jpg")} alt="2"/>
            <Carousel.Caption>
              <p>A Place to Play and Exercise Together</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={require("/Users/wuaiwei/Desktop/personal-portfolio/src/components/slider/images/Slideshow_3.jpg")} alt="3" />
            <Carousel.Caption>
              <p>
              A Place to Play and Exercise Together
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
//   render(<ControlledCarousel />);



export default Slider;