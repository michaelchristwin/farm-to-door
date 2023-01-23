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
import NavBar from "../JSX/Navbar";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState({
    query: "",
  });
  console.log(search);
  function handleinput(e) {
    setSearch({ ...search, query: e.target.value });
  }
  function handleKeypress(e) {
    return null;
  }

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
          <Dropdown.Toggle className="dropdown-toggles">
            <img src={Filter} alt="filter" className="filter me-3" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item className="item">
              <Dropdown>
                <Dropdown.Toggle className="food-tog">Food</Dropdown.Toggle>
                <Dropdown.Menu id="mali">
                  <Dropdown.Item>Deli</Dropdown.Item>
                  <Dropdown.Item>Vegetable</Dropdown.Item>
                  <Dropdown.Item>Fruit</Dropdown.Item>
                  <Dropdown.Item>Frozen</Dropdown.Item>
                  <Dropdown.Item>Drink & Beverage</Dropdown.Item>
                  <Dropdown.Item>Spicyice</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2" className="item">
              Baby
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="item">
              Health & Beauty
            </Dropdown.Item>
            <Dropdown.Item className="item">Pet Supplies</Dropdown.Item>
            <Dropdown.Item className="item">Bathroom</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input
          className="form-control border-0 text-center srch me-1"
          type="search"
          placeholder="Search Grocery"
          aria-label="Search"
          onChange={handleinput}
          onKeyDown={handleKeypress}
        />
      </div>
      <Row className="mx-auto px-3">
        <Col>
          <Product
            img={Strawberry}
            className="strawberry"
            name="Strawberry"
            price="10.6"
            type="Fruit"
          />
        </Col>
        <Col>
          <Product
            img={Avacado}
            className="avacado"
            name="Avacado"
            price="10.6"
            type="Fruit"
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
            type="Vegetable"
          />
        </Col>
        <Col>
          <Product
            img={Orange}
            className="orange"
            name="Orange"
            price="1.60"
            type="Fruit"
          />
        </Col>
      </Row>
      <Row className="px-3 mx-auto mt-3 mb-5">
        <Col>
          <Product
            img={Tomato}
            className="tomato"
            name="Tomato"
            price="5.60"
            type="Vegetable"
          />
        </Col>
        <Col>
          <Product
            img={GreenBeans}
            className="green-beans"
            name="Greenbeans"
            price="5.60"
            type="Vegetable"
          />
        </Col>
      </Row>
      <NavBar />
    </main>
  );
}

export default Home;
