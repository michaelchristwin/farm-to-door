import BackG from "../img/back-g.png";
import NavBar from "../JSX/Navbar";
import "../CSS/styles.css";
import Call from "../img/call.png";

function Tracking() {
  return (
    <main className="cart-g">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 ms-2">Order Status</p>
      </div>
      <section className="the-pay mb-5">
        <div className="d-flex justify-content-around pt-3 mb-3">
          <button className="btn b-stat">Product List</button>
          <button className="btn b-stat">Process</button>
          <button className="btn b-stat">Track</button>
        </div>
        <div className="map">
          <div className="customer mx-auto d-flex">
            <div className="cust-p mt-3 mx-2"></div>
            <div className="ms-2 mt-4">
              <span className="c-name d-block">Emmanuel Elias</span>
              <span className="c-no d-block">+234 (0)90-3882-1990</span>
            </div>
            <img src={Call} alt="" className="call ms-2 mt-3" />
          </div>
        </div>
        <NavBar />
      </section>
    </main>
  );
}

export default Tracking;
