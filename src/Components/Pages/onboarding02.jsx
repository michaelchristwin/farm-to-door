import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Car1 from "../img/car1.png";
import "../CSS/styles.css";

function Onboarding02() {
  return (
    <main className="d-flex">
      <div className="car bg-dark">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Car1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="" alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
}

export default Onboarding02;
