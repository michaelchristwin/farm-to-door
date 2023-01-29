import BackG from "../img/back-g.png";
import "../CSS/styles.css";

function Status() {
  return (
    <main className="cart-g">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 ms-2">Order Status</p>
      </div>
      <section className="the-pay px-4 pt-3">
        <div className="d-flex">
          <p className="key">Pickup</p>
          <p className="value">: 08 Oct 21, 8:00 PM</p>
        </div>
        <div className="d-flex">
          <p className="key">Payment Method</p>
          <p className="value">: Credit card</p>
        </div>
        <div className="d-flex">
          <p className="key">Donation Amount</p>
          <p className="value">: Tsh200</p>
        </div>
      </section>
    </main>
  );
}

export default Status;
