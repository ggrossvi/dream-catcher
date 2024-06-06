// help me write a home page with a bootstrap carousel
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () => {
    return ( 
        
        <div style={{ display: 'block', width: '600px', margin: 0, padding: 30 }}> 
          <h4>Women In Cloud</h4> 
          <Carousel> 
            <Carousel.Item interval={4500}> 
              <img 
                className="d-block w-100"
                src="/src/assets/women.webp"
                alt="Image One"
              /> 
              <Carousel.Caption> 
                <h3>Join our Community</h3> 
                <p></p> 
                <Button variant="primary">Join Now</Button>
              </Carousel.Caption> 
            </Carousel.Item> 
            <Carousel.Item interval={4500}> 
              <img 
                className="d-block w-100"
    src="src/assets/react.svg"
                alt="Image Two"
              /> 
              <Carousel.Caption> 
                <h3>Events</h3> 
                <p>Sample Text for Image Two</p> 
              </Carousel.Caption> 
            </Carousel.Item> 
          </Carousel> 
        </div> 
      ); 
};

export default Home;