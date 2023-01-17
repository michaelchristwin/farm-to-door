import FarmToDoor from "../img/farmtodoor.png";
import "../CSS/styles.css";
import Arrow from "../img/arrow.png";
import Filter from "../img/filter.png";

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
      <div className="mt-3">
        <img src={Filter} alt="filter" className="filter float-start ms-4" />
        <input
          className="form-control border-0 text-center srch float-end me-3"
          type="search"
          placeholder="Search Grocery"
          aria-label="Search"
        />
      </div>
    </main>
  );
}

export default Home;
