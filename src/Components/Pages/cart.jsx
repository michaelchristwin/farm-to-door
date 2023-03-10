import "../CSS/styles.css";
import BackG from "../img/back-g.png";
import CartItem from "../JSX/CartItem";
import CartList from "../JSX/CartList";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MyHome from "../img/home.png";
import MyCart from "../img/mycart.png";
import Order from "../img/order.png";
import Offer from "../img/offer.png";
import Setting from "../img/setting.png";
import "../CSS/styles.css";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
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
        <button onClick={goBack} className="back-btn-g ms-2 mt-1">
          <img src={BackG} alt="button" className="back-g" />
        </button>
        <p className="cart-t mt-3 ms-2">My Cart Details</p>
      </div>
      <section className="the-cart">
        <div className="d-flex justify-content-center pt-2">
          <button className="cart-b btn border">All Order</button>
          <button className="cart-b btn border ms-1">Pending</button>
          <button className="cart-b btn border ms-1">Processing</button>
        </div>
        {ToBuy}
        <section className="bg-white pt-3 check-s">
          <button className="btn checkout d-block mx-auto mb-2">
            <Link to={`${BaseUrl}/cart-checkout`} className="li-out">
              Checkout
            </Link>
          </button>
          <Navbar bg="white" variant="light" className="pb-3" id="nav-bar">
            <Container className="d-block cont-nav">
              <Nav className="me-auto" id="nav">
                <Link to={`${BaseUrl}/home`} className="cart-link d-block">
                  <img
                    src={MyHome}
                    alt="home"
                    className="d-block my-home mx-auto"
                  />
                  <span className="nav-t">Home</span>
                </Link>
                <Nav.Link className="d-block">
                  <Link to={`${BaseUrl}/cart`} className="cart-link">
                    <img
                      src={MyCart}
                      alt="Cart"
                      className="d-block my-cart mx-auto"
                    />
                    <span className="nav-t">Cart</span>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#home" className="d-block">
                  <img
                    src={Order}
                    alt="Order"
                    className="d-block my-order mx-auto"
                  />
                  <span className="nav-t">Order</span>
                </Nav.Link>
                <Nav.Link href="#home" className="d-block">
                  <img
                    src={Offer}
                    alt="Offer"
                    className="d-block my-offer mx-auto"
                  />
                  <span className="nav-t">Offer</span>
                </Nav.Link>
                <Nav.Link href="#home" className="d-block">
                  <img
                    src={Setting}
                    alt="Offer"
                    className="d-block my-settings mx-auto"
                  />
                  <span className="nav-t">Settings</span>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </section>
      </section>
    </main>
  );
}

export default Cart;
