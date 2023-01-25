import "../CSS/styles.css";
import BackG from "../img/back-g.png";

function Cart() {
  return (
    <main className="cart-g">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 ms-2">My Cart Details</p>
      </div>
      <section className="the-cart">
        <div className="d-flex justify-content-center">
          <button className="cart-b btn border">All Order</button>
          <button className="cart-b btn border">Pending</button>
          <button className="cart-b btn border">Processing</button>
        </div>
      </section>
    </main>
  );
}

export default Cart;
