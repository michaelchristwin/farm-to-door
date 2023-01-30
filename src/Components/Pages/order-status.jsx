import BackG from "../img/back-g.png";
import "../CSS/styles.css";
import Check from "../img/check.png";
import NoCheck from "../img/nocheck.png";
import Hline from "../img/hline.png";

function Status() {
  return (
    <main className="cart-g">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 ms-2">Order Status</p>
      </div>
      <section className="the-pay">
        <div className="px-4 pt-3 d-flex justify-content-between">
          <div className="d-block">
            <p className="key d-block">Pickup</p>
            <p className="key d-block">Payment Method</p>
            <p className="key d-block">Donation Amount</p>
          </div>
          <div className="d-block">
            <p className="value d-block">: 08 Oct 21, 8:00 PM</p>
            <p className="value d-block">: Credit card</p>
            <p className="value d-block">: Tsh200</p>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-3">
          <button className="btn b-stat">Product List</button>
          <button className="btn b-stat">Process</button>
          <button className="btn b-stat">Track</button>
        </div>
        <section className="mt-5">
          <div className="d-flex">
            <span className="o-time text-nowrap float-left ms-4">9:30 AM</span>
            <div className="d-block ms-2 img-ch">
              <img src={Check} alt="Check" className="check" />
              <img src={Hline} alt="svg" className="hline" />
            </div>
            <div className="d-block ms-3">
              <span className="pro-t">Order Placed</span>
              <span className="d-block other mt-1">Your order #23456 was</span>
              <span className="d-block other">placed for delivery.</span>
            </div>
          </div>
          <div className="d-flex mt-4">
            <span className="o-time text-nowrap float-left ms-4">9:30 AM</span>
            <div className="d-block ms-2 img-ch">
              <img src={Check} alt="Check" className="check" />
              <img src={Hline} alt="svg" className="hline" />
            </div>
            <div className="d-block ms-3">
              <span className="pro-t">Product in cart</span>
              <span className="d-block other mt-1">Order picked and</span>
              <span className="d-block other">added to cart.</span>
            </div>
          </div>
          <div className="d-flex mt-4">
            <span className="o-time text-nowrap float-left ms-4">9:30 AM</span>
            <div className="d-block ms-2 img-ch">
              <img src={Check} alt="Check" className="check" />
              <img src={Hline} alt="svg" className="hline" />
            </div>
            <div className="d-block ms-3">
              <span className="pro-t">Processing</span>
              <span className="d-block other mt-1">Packing your order now</span>
              <span className="d-block other">
                and getting ready for delivery.
              </span>
            </div>
          </div>
          <div className="d-flex mt-4">
            <span className="o-time text-nowrap float-left ms-4">9:30 AM</span>
            <div className="d-block ms-2 img-ch">
              <img src={Check} alt="Check" className="check" />
              <img src={Hline} alt="svg" className="hline" />
            </div>
            <div className="d-block ms-3">
              <span className="pro-t">On the way</span>
              <span className="d-block other mt-1">
                Your order is on the way to
              </span>
              <span className="d-block other">delivery. Tap to track it.</span>
            </div>
          </div>
          <div className="d-flex mt-4">
            <span className="o-time text-nowrap float-left ms-4">9:30 AM</span>
            <div className="d-block ms-2 img-ch">
              <img src={NoCheck} alt="Check" className="check" />
              <img src={Hline} alt="svg" className="hline" />
            </div>
            <div className="d-block ms-3">
              <span className="pro-t">On the way</span>
              <span className="d-block other mt-1">
                Your order has delivered in front
              </span>
              <span className="d-block other">of your door. Please check.</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Status;
