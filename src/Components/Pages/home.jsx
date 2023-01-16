import FarmToDoor from "../img/farmtodoor.png";

function Home() {
  return (
    <main className="home">
      <div className="d-flex justify-content-between px-2 shadow">
        <img src={FarmToDoor} alt="logo" className="home-lg" />
        <p className="groc mt-3">Groceries</p>
        <p className="kili mt-3">Kilimanjaro</p>
      </div>
      <form className="d-flex mt-5" role="search">
        <input
          className="form-control border-0 text-center"
          type="search"
          placeholder="Search Grocery"
          aria-label="Search"
        />
      </form>
    </main>
  );
}

export default Home;
