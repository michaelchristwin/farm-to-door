import Modal from "react-bootstrap/Modal";
import "../CSS/styles.css";
import Time from "../img/time.png";
import { Link } from "react-router-dom";
import BaseUrl from "./BaseUrl";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  const [show, setShow] = useState(true);
  function Swap() {
    let pickUp = document.getElementById("pick");
    pickUp.classList.add("mod-active");
    setShow(false);
    console.log("Fuck JavaScript");
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="d-flex justify-content-between px-3 mt-2">
        <p className="top-mod">Cart Total</p>
        <p className="top-mod">TSH 11.52</p>
      </div>
      <p className="d-block ms-3 young">9000 Young Street store</p>
      <Modal.Body>
        <div className="pd border d-flex mx-auto">
          <button className="btn-pd btn">Pickup</button>
          <button className="btn-pd btn" id="pick" onClick={Swap}>
            Delivery
          </button>
        </div>
        <div className="pd border mx-auto mt-3 d-flex pt-2 px-3 justify-content-between">
          <p>Choose a pickup time</p>
          <img src={Time} alt="Time" className="time mt-1" />
        </div>
        <button className="btn checkout d-block mx-auto mt-3">
          <Link to={`${BaseUrl}/cart-checkout`} className="li-out">
            Checkout
          </Link>
        </button>
      </Modal.Body>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
