import "../CSS/styles.css";
import DP from "../img/dp.png";
import { Dropdown } from "react-bootstrap";
import Filter from "../img/filter.png";
import ProductList from "../JSX/ProductList";
import Items from "../JSX/Items";

function HomeS() {
  const MyProducts = ProductList.map((product) => {
    return (
      <Items name={product.name} img={product.img} price={product.price} />
    );
  });
  return (
    <main className="px-3">
      <span className="welcome d-block mt-4">Welcome</span>
      <div className="d-flex justify-content-between">
        <p className="uname mt-3 d-block">Emmanuel Elias</p>
        <img src={DP} alt="Avatar" className="dp" />
      </div>
      <div className="py-2 d-flex justify-content-center">
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
        />
      </div>
      <div className="item2 bg-white p-2 ps-list mx-auto">{MyProducts}</div>
    </main>
  );
}

export default HomeS;
