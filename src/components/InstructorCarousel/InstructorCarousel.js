import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import BlackBeltPromotion from './images/black-belt-promotion.jpeg';
import UfcSpencer from './images/ufc-spencer.jpeg';
import './InstructorCarousel.css';


const InstructorCarousel = () => {
    return (
        <>
        <div className="center-carousel">
        <Carousel style={{width: "80rem", height: "50rem", marginTop: "2rem"}} fade>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={BlackBeltPromotion}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Black Belt Promotion Day</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={UfcSpencer}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>My UFC Photo</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
        
        
        </>


    )
}

export default InstructorCarousel;