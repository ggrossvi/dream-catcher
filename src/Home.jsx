import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Home = () => {
  return (

  // <div className="container">
  //   <div style={{ display: 'block', width: '600px', margin: 0, padding: 30 }}>
  //     <h4>Women In Cloud</h4>
  //     <Carousel>
  //       <Carousel.Item interval={4500}>
  //         <img
  //           className="d-block w-100"
  //           src="/src/assets/women.webp"
  //           alt="Image One"
  //         />
  //         <Carousel.Caption>
  //           <h3>Join our Community</h3>
  //           <p></p>
  //           <Button variant="primary">Join Now</Button>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //       <Carousel.Item interval={4500}>
  //         <img className="d-block w-100"
  //           src="src/assets/react.svg"
  //           alt="Image Two"
  //         />
  //         <Carousel.Caption>
  //           <h3>Events</h3>
  //           <p>Sample Text for Image Two</p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //     </Carousel>
  //     <div className="flex-container">
  //       <section id="events" className="bg-light mt-5">
  //         <div className="container-lg">
  //           <div className="text-center">
  //             <h2>Events</h2>
  //             <p className="lead text-muted">Come meet your next BFF or employer</p>
  //           </div>
  //         </div>
  //       </section>
  //       <section id="events" className="bg-light mt-5">
  //         <div className="container-lg">
  //           <div className="text-center">
  //             <h2>Events</h2>
  //             <p className="lead text-muted">Come meet your next BFF or employer</p>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
      

  //   </div>
  //   </div>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <h4>Women In Cloud</h4>
          <Carousel>
            <Carousel.Item interval={4500}>
              <img
                className="d-block w-100"
                src="/src/assets/women.webp"
                alt="Image One"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
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
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Events</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="flex-container">
            <section id="events" className="bg-light mt-5">
              <div className="container-lg">
                <div className="text-center">
                  <h2>Events</h2>
                  <p className="lead text-muted">Come meet your next BFF or employer</p>
                </div>
              </div>
            </section>
            <section id="events" className="bg-light mt-5">
              <div className="container-lg">
                <div className="text-center">
                  <h2>Events</h2>
                  <p className="lead text-muted">Come meet your next BFF or employer</p>
                </div>
              </div>
            </section>
          </div>
        </div>
    );
  };
  

export default Home;