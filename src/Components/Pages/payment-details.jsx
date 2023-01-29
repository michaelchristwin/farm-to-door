import "../CSS/styles.css";
import BackG from "../img/back-g.png";

function Payment() {
  return (
    <main className="cart-g d-block">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 ms-2">Payment Details</p>
      </div>
      <section className="the-pay">
        <div className="d-block px-4">
          <label
            htmlFor="total-amount"
            className="label form-label pt-4 mx-auto"
          >
            Total Amount
          </label>
          <input
            type="text"
            id="total-amount"
            placeholder="Tsh 11.52"
            className="form-control pay-inp d-block mx-auto"
          />
        </div>
        <div className="mt-4 px-4">
          <label htmlFor="payment-method" className="label form-label">
            Payment Method
          </label>
          <input
            type="text"
            id="payment-method"
            placeholder="Credit Card"
            className="form-control pay-inp d-block mx-auto"
          />
        </div>
        <div className="mt-4">
          <span className="label ms-5">Card Expiration Date</span>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="form-control pay-inp2"
            />
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="form-control pay-inp2 ms-2 "
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Payment;
