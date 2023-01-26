import "../CSS/styles.css";
import BackG from "../img/back-g.png";
import CartItem from "../JSX/CartItem";
import CartList from "../JSX/CartList";

function Cart() {
  const ToBuy = CartList.map((item) => {
    return (
      <CartItem
        img={item.img}
        key={item.name}
        name={item.name}
        size={item.size}
        price={item.price}
      />
    );
  });
  return (
    <main className="cart-g">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 ms-2">My Cart Details</p>
      </div>
      <section className="the-cart">
        <div className="d-flex justify-content-center pt-2">
          <button className="cart-b btn border">All Order</button>
          <button className="cart-b btn border ms-1">Pending</button>
          <button className="cart-b btn border ms-1">Processing</button>
        </div>
        {ToBuy}
      </section>
    </main>
  );
}

export default Cart;
