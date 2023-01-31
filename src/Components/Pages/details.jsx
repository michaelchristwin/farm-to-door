import Back from "../img/back.png";
import Like from "../img/like.png";
import "../CSS/styles.css";
import Star from "../img/5star.png";
import { useState } from "react";
import Plus from "../img/plus.png";
import Minus from "../img/minus.png";
import Strawberry from "../img/strawberry.png";
import Product from "../JSX/product";
import { Row, Col } from "react-bootstrap";
import Brocolli from "../img/brocolli.png";
import { useNavigate } from "react-router-dom";

function Details(props) {
  const [count, setCount] = useState(0);
  function Add() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  function Sub() {
    setCount((prevCount) => {
      return prevCount > 0 ? prevCount - 1 : 0;
    });
  }
  return (
    <main>
      <section
        className="top pt-4"
        style={
          props.name === "Orange"
            ? { backgroundColor: "#faf0e6" }
            : { backgroundColor: "#ebf5e8" }
        }
      >
        <div className="d-flex justify-content-between mt-2">
          <button onClick={goBack} className="back-btn ms-2 ">
            <img src={Back} alt="button" className="hello" />
          </button>
          <img src={Like} alt="Like" className="back me-3" />
        </div>
        <img src={props.img} alt="Product" className="orange-d d-block" />
      </section>
      <section className="px-3">
        <p className="fruit-name">
          {props.name} {props.type}
        </p>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img src={Star} alt="Rating" className="star" />
            <span className="ms-1 five">(5.0)</span>
          </div>
          <div className="d-flex">
            <img src={Minus} alt="Add" className="contr" onClick={Sub} />
            <span className="mt-1 mx-1 count">{count}</span>
            <img src={Plus} alt="Minus" className="contr" onClick={Add} />
          </div>
        </div>
        <section className="mt-2">
          <p className="descrip">Product Description</p>
          <p className="descr-t">
            The oranges are bright,easy to peel and have a sweet and
            <span className="more"> More</span>
          </p>
          <p className="descrip">Nutrition and Ingredrients</p>
          <p className="explore">Explore more related products</p>
        </section>
        <div className="px-2">
          <Row>
            <Col>
              <Product
                img={Strawberry}
                className="strawberry"
                name="Strawberry"
                price="10.6"
                type="Fruit"
              />
            </Col>
            <Col>
              <Product
                img={Brocolli}
                className="brocolli"
                name="Broccoli"
                price="10.6"
                type="Vegetable"
              />
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
}

export default Details;
