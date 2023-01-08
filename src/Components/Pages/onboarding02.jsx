import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Car1 from "../img/car1.png";
import Pickup from "../img/pickup.png";
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
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Pickup} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
}

export default Onboarding02;
