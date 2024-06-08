import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Home = () => {
  return (

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
                <a href ="https://www.linkedin.com/company/women-in-cloud/"><Button variant="primary">Join Now</Button></a>
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
          
            <section id="news" className="bg-light mt-5">
              <div className="container-lg">
                <div className="text-center">
                  <h2>News</h2>
                      <p className="lead text-muted">Women In Cloud Launches Microsoft Cybersecurity Certification Scholarships To Spur $1 Billion in Economic 
                Access and Propel Career Opportunities for Women in US Markets</p>
                  <p>To learn more and apply for this scholarship visit our website: 
                    https://womenincloud.com/cybersecurity/
                  </p>
                </div>
              </div>
            </section>
            <section id="Jobs" className="bg-light mt-5">
              <div className="container-lg">
                <div className="text-center">
                  <h2>Jobs</h2>
                      <p className="lead text-muted">Cloud Network Engineer II</p>
                  <p>Job Details</p>
                  <p>As part of Microsoft Azure, the Azure Networking team designs and builds the network infrastructure that powers hundreds of thousands of servers in datacenters around the globe, providing core network infrastructure services for Azure, Bing, and other Microsoft cloud services. In Azure Networking, we are at the very front of Cloud Computing by running one of the largest data center network infrastructures in the world. By joining this team, you will gain marketable experience in service-oriented network architectures and datacenter networking at massive scale. 
                    <a href="https://www.linkedin.com/jobs/search/?currentJobId=3937771360&geoId=103644278&keywords=cloud%20network%20engineer%20microsoft&location=United%20States&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true">&nbsp;Apply here:</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
    );
  };
  

export default Home;