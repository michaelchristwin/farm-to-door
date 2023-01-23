import Back from "../img/back.png";
import Like from "../img/like.png";
import "../CSS/styles.css";
import OrangeD from "../img/orange-d.png";
import Star from "../img/5star.png";
import { useState } from "react";
import Plus from "../img/plus.png";
import Minus from "../img/minus.png";

function Details() {
  const [count, setCount] = useState(0);
  function Add() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  function Sub() {
    setCount((prevCount) => {
      return prevCount > 0 ? prevCount - 1 : 0;
    });
  }
  return (
    <main>
      <section className="top pt-4">
        <div className="d-flex justify-content-between mt-2">
          <img src={Back} alt="Back" className="back ms-3" />
          <img src={Like} alt="Like" className="back me-3" />
        </div>
        <img src={OrangeD} alt="Product" className="orange-d d-block" />
      </section>
      <section className="px-3">
        <p className="fruit-name">Orange Fruit</p>
        <div className="d-flex">
          <div className="d-flex">
            <img src={Star} alt="Rating" className="star" />
            <span className="ms-1 five">(5.0)</span>
          </div>
          <div className="d-flex">
            <img src={Plus} alt="Add" className="contr" onClick={Add} />
            <span className="mt-1">{count}</span>
            <img src={Minus} alt="Minus" className="contr" onClick={Sub} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Details;
