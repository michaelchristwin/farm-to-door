import Wrect from "../img/wrect.png";
import "../CSS/styles.css";

function Onboarding01() {
  return (
    <main>
      <div>
        <img src={Wrect} alt="svg" className="wrect mx-auto d-flex mt-3" />
      </div>
      <div className="text-center">
        <p className="brand">FarmToDoor</p>
        <span className="d-block groc">The easiest way to get the</span>
        <span className="d-block groc">
          groceries you desire delivered to you.
        </span>
        <button className="btn mt-5 get">Get Started</button>
      </div>
    </main>
  );
}

export default Onboarding01;
