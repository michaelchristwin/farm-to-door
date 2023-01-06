import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FarmTo from "../img/farmtodoor.png";
import "../CSS/styles.css";

function Onboarding() {
  return (
    <main className="d-flex">
      <div className="car bg-dark">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={FarmTo} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={FarmTo} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={FarmTo} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
}

export default Onboarding;
