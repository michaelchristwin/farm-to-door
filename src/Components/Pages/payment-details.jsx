import "../CSS/styles.css";
import BackG from "../img/back-g.png";
import NavBar from "../JSX/Navbar";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className="cart-g d-block">
      <div className="d-flex px-3 py-4">
        <button onClick={goBack} className="back-btn-g ms-2">
          <img src={BackG} alt="button" className="back-g" />
        </button>
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
        <fieldset className="mt-4">
          <label htmlFor="account-number" className="ms-5 label form-label">
            Account Number
          </label>
          <input
            type="text"
            id="account-number"
            placeholder="Account Number"
            className="form-control pay-inp d-block mx-auto"
          />
        </fieldset>
        <p className="label ms-5 mt-3">Security Code</p>
        <button className="btn checkout d-block mx-auto mb-2">Pay Now</button>
        <NavBar />
      </section>
    </main>
  );
}

export default Payment;
