import FarmToDoor from "../img/farmtodoor.png";

function Home() {
  return (
    <main>
      <div className="d-flex justify-content-between px-2 shadow">
        <img src={FarmToDoor} alt="logo" className="home-lg" />
        <p className="groc mt-3">Groceries</p>
        <p className="kili mt-3">Kilimanjaro</p>
      </div>
    </main>
  );
}

export default Home;
