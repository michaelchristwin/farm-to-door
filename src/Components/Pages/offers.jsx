import BackG from "../img/back-g.png";
import NavBar from "../JSX/Navbar";
import "../CSS/styles.css";
import Pumpkin from "../img/pumpkin.png";

function Offers() {
  return (
    <main className="cart-g">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 ms-2">Available Offers</p>
      </div>
      <section className="the-pay mb-5 pt-4">
        <div className="d-flex b-friday mx-auto">
          <div className="ms-3 me-1 mt-4">
            <span className="bf-text d-block text-nowrap">Black Friday</span>
            <span className="bf-text">offer</span>
            <button className="check-now btn">Check now</button>
          </div>
          <img src={Pumpkin} alt="" className="pumpkin me-1 mt-3" />
        </div>
        <NavBar />
      </section>
    </main>
  );
}

export default Offers;
