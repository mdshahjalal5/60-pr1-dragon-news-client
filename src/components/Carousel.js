import React from 'react';
import { Carousel } from 'react-bootstrap';
import anything3 from '../assets/brands/Brand1.png'
import anything from '../assets/brands/Brand2.png'
const BrandCarousel= () => {
    return (
        <div>
            <h2>THis is carousel</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={anything3}
                        alt="First slide"
                    />
                 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={anything}
                        alt="First slide"
                    />
                 
                </Carousel.Item>
               
            </Carousel>
        </div>
    );
};

export default BrandCarousel;