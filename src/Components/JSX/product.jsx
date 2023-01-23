import Cart from "../img/cart.png";

function Product(props) {
  return (
    <div className={`bg-white product d-block`}>
      <img
        src={props.img}
        alt="Strawberry"
        className={`${props.className} mx-auto d-block my-2`}
      />
      <span className="product-name ms-2 d-block">{props.name}</span>
      <span className="type d-block mt-2 ms-2">{props.type}</span>
      <div className="d-flex justify-content-between px-2">
        <p className="price mt-3">Tsh{props.price}</p>
        <img src={Cart} alt="cart" className="cart" />
      </div>
    </div>
  );
}

export default Product;
