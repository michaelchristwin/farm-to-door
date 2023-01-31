import BackG from "../img/back-g.png";
import NavBar from "../JSX/Navbar";
import "../CSS/styles.css";
import Pumpkin from "../img/pumpkin.png";
import Tomato from "../img/tomato.png";
import Orange from "../img/orange-d.png";

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
            <button className="check-now btn mt-2">Check now</button>
          </div>
          <img src={Pumpkin} alt="pumpkin" className="pumpkin me-1 mt-3" />
        </div>
        <p className="avail mt-3">Available until 24 July 2021</p>
        <div className="d-flex tomato-o mx-auto mt-3">
          <div className="ms-3 me-1 mt-4">
            <span className="bf-text d-block text-nowrap">Tomato</span>
            <span className="bf-text">40% off</span>
            <button className="check-now btn mt-2">Buy now</button>
          </div>
          <img src={Tomato} alt="tomato" className="pumpkin me-1 mt-3" />
        </div>
        <p className="avail mt-3">Available until 24 July 2021</p>
        <div className="d-flex b-friday mx-auto mt-3">
          <div className="ms-3 me-1 mt-4">
            <span className="bf-text d-block text-nowrap">Orange</span>
            <span className="bf-text">4% off</span>
            <button className="check-now btn mt-2">Check now</button>
          </div>
          <img src={Orange} alt="orange" className="pumpkin me-1 mt-3" />
        </div>
        <NavBar />
      </section>
    </main>
  );
}

export default Offers;
