import { useState } from "react";
import Plus from "../img/plus.png";
import Minus from "../img/minus.png";
import AddNote from "../img/addnote.png";
import Delete from "../img/delete.png";
import "../CSS/styles.css";

function CartItem(props) {
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
    <main className="pb-2">
      <div className="d-flex cart-p mt-3 px-3 justify-content-between">
        <div className="d-flex">
          <img src={props.img} alt="" className="cart-i" />
          <div className="d-block mt-2 ms-3">
            <span className="item-name">{props.name}</span>
            <p className="item-price mt-2">
              Tsh{props.price} <span className="size">{props.size}</span>
            </p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <img src={Minus} alt="Add" className="contr" onClick={Sub} />
          <span className="mt-1 mx-1 count">{count}</span>
          <img src={Plus} alt="Minus" className="contr" onClick={Add} />
        </div>
      </div>
      <div className="d-flex px-3 mt-1">
        <div className="d-flex mt-1">
          <img src={AddNote} alt="" className="add-note" />
          <span className="add-t ms-2">Add Note</span>
        </div>
        <img src={Delete} alt="" className="delete ms-3" />
      </div>
      <hr className="mt-3 hr d-block mx-auto " />
    </main>
  );
}

export default CartItem;
