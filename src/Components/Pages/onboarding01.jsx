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
        <Link to={`${BaseUrl}/onboarding2`} className="mt-5">
          <button className="btn  get">Get Started</button>
        </Link>
      </div>
    </main>
  );
}

export default Onboarding01;
