import FarmToDoor from "../img/farmtodoor.png";
import "../CSS/styles.css";
import Arrow from "../img/arrow.png";
import Filter from "../img/filter.png";
import Product from "../JSX/product";
import { Row, Col } from "react-bootstrap";
import Strawberry from "../img/strawberry.png";
import Avacado from "../img/avacado.png";
import Orange from "../img/orange.png";
import Brocolli from "../img/brocolli.png";
import Tomato from "../img/tomato.png";
import GreenBeans from "../img/greenbeans.png";
import Dropdown from "react-bootstrap/Dropdown";

function Home() {
  return (
    <main className="home">
      <div className="d-flex justify-content-between px-2 bg-white">
        <img src={FarmToDoor} alt="logo" className="home-lg" />
        <p className="groc mt-3">Groceries</p>
        <div className="d-flex mt-3 kili">
          Kilimanjaro
          <img src={Arrow} alt="Arrow" className="arrow mt-2 ms-1" />
        </div>
      </div>
      <div className="py-3 d-flex justify-content-center">
        <Dropdown>
          <Dropdown.Toggle>
            <img src={Filter} alt="filter" className="filter me-3" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input
          className="form-control border-0 text-center srch me-1"
          type="search"
          placeholder="Search Grocery"
          aria-label="Search"
        />
      </div>
      <Row className="mx-auto px-3">
        <Col>
          <Product
            img={Strawberry}
            className="strawberry"
            name="Strawberry"
            price="10.6"
          />
        </Col>
        <Col>
          <Product
            img={Avacado}
            className="avacado"
            name="Avacado"
            price="10.6"
          />
        </Col>
      </Row>
      <Row className="mx-auto px-3 mt-3">
        <Col>
          <Product
            img={Brocolli}
            className="brocolli"
            name="Broccoli"
            price="10.6"
          />
        </Col>
        <Col>
          <Product img={Orange} className="orange" name="Orange" price="1.60" />
        </Col>
      </Row>
      <Row className="px-3 mx-auto mt-3">
        <Col>
          <Product img={Tomato} className="tomato" name="Tomato" price="5.60" />
        </Col>
        <Col>
          <Product
            img={GreenBeans}
            className="green-beans"
            name="Greenbeans"
            price="5.60"
          />
        </Col>
      </Row>
    </main>
  );
}

export default Home;
