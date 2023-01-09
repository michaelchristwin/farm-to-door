import Wrect from "../img/wrect.png";
import "../CSS/styles.css";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";

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
        <button className="btn mt-5 get">
          <Link to={`${BaseUrl}/onboarding2`}>Get Started</Link>
        </button>
      </div>
    </main>
  );
}

export default Onboarding01;
