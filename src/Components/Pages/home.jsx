import FarmToDoor from "../img/farmtodoor.png";
import "../CSS/styles.css";
import Arrow from "../img/arrow.png";
import Filter from "../img/filter.png";
import Strawberry from "../img/strawberry.png";

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
      <div className="py-3 d-flex justify-content-between">
        <img src={Filter} alt="filter" className="filter ms-4" />
        <input
          className="form-control border-0 text-center srch me-4"
          type="search"
          placeholder="Search Grocery"
          aria-label="Search"
        />
      </div>
      <div className="d-flex px-3">
        <div className="bg-white product">
          <img src={Strawberry} alt="Strawberry" className="strawberry" />
          <p className="product-name">Strawberry</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
