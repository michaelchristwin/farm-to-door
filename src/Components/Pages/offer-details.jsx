import "../CSS/styles.css";
import NavBar from "../JSX/Navbar";
import BackG from "../img/back-g.png";
import { Row, Col } from "react-bootstrap";
import Product from "../JSX/product";
import Pumpkin from "../img/pumpkin.png";
import Orange from "../img/orange-d.png";
import Banana from "../img/banana-o.png";
import Ballon from "../img/ballon.png";
import Choco from "../img/choco.png";
import Lamp from "../img/lamp.png";

function OfferDetails() {
  return (
    <main className="cart-g">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 ms-2">Black Friday offer</p>
      </div>
      <section className="the-pay mb-5 pt-4">
        <div className="pb-5">
          <Row className="px-4 g-1">
            <Col>
              <Product
                img={Pumpkin}
                name="Pumpkin"
                className="pumpkin-p"
                type={<s>Tsh10.00</s>}
                price="6.00"
              />
            </Col>
            <Col>
              <Product
                img={Orange}
                name="Orange"
                className="orange"
                type={<s>Tsh12.00</s>}
                price="8.00"
              />
            </Col>
          </Row>
          <Row className="px-4 g-1 mt-2">
            <Col>
              <Product
                img={Banana}
                name="Banana"
                className="banana-o"
                type={<s>Tsh30.00</s>}
                price="25.00"
              />
            </Col>
            <Col>
              <Product
                img={Ballon}
                name="Balloon"
                className="balloon"
                type={<s>Tsh5.00</s>}
                price="1.00"
              />
            </Col>
          </Row>
          <Row className="px-4 g-1 mt-2">
            <Col>
              <Product
                img={Lamp}
                name="Lamp"
                className="lamp"
                type={<s>Tsh30.00</s>}
                price="25.00"
              />
            </Col>
            <Col>
              <Product
                img={Choco}
                name="Chocolate"
                className="choco"
                type={<s>Tsh5.00</s>}
                price="1.00"
              />
            </Col>
          </Row>
        </div>

        <NavBar />
      </section>
    </main>
  );
}

export default OfferDetails;
