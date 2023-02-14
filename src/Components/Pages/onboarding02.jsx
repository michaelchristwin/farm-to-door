import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Car1 from "../img/car1.png";
import Pickup from "../img/pickup.png";
import "../CSS/styles.css";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";

function Onboarding02() {
  return (
    <main>
      <div className="car d-flex flex-column">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Car1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Pickup} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
        <Link to={`${BaseUrl}/login`} className="mx-auto">
          <button className="btn mt-5 get mx-auto">Got It </button>
        </Link>
      </div>
    </main>
  );
}

export default Onboarding02;
