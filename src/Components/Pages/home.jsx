import FarmToDoor from "../img/farmtodoor.png";
import "../CSS/styles.css";
import Arrow from "../img/arrow.png";
import Filter from "../img/filter.png";
import Product from "../JSX/product";
import Strawberry from "../img/strawberry.png";
import Avacado from "../img/avacado.png";
import Orange from "../img/orange.png";
import Brocolli from "../img/brocolli.png";

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
        <img src={Filter} alt="filter" className="filter me-3" />
        <input
          className="form-control border-0 text-center srch me-1"
          type="search"
          placeholder="Search Grocery"
          aria-label="Search"
        />
      </div>
      <div className="d-flex px-3 justify-content-center">
        <Product
          img={Strawberry}
          className="strawberry"
          name="Strawberry"
          price="10.6"
          me="me-3"
        />
        <Product
          img={Avacado}
          className="avacado"
          name="Avacado"
          price="10.6"
        />
      </div>
      <div className="d-flex px-3 justify-content-center mt-3">
        <Product
          img={Brocolli}
          className="brocolli"
          name="Broccoli"
          price="10.6"
          me="me-3"
        />
        <Product img={Orange} className="orange" name="Orange" price="1.60" />
      </div>
    </main>
  );
}

export default Home;
