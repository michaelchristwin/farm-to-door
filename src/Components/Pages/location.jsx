import FarmToDoor from "../img/farmtodoor.png";
import GPS from "../img/gps.png";
import "../CSS/styles.css";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";

function TheLocation() {
  return (
    <main>
      <img src={FarmToDoor} alt="logo" className="lftd mx-auto d-block mt-5" />
      <p className="text-center set-loc mt-5">Set Your Location</p>
      <div className="mx-auto d-block" id="current">
        <span className="ms-3 mt-2 d-block inside">
          <img src={GPS} alt="gps" className="gps me-2" /> Use current location
        </span>
      </div>
      <div className="mx-auto d-block border mt-4" id="pop">
        <span className="ms-3 mt-2 d-block inside">Select your province</span>
      </div>
      <div className="mx-auto d-block border mt-4" id="pop">
        <span className="ms-3 mt-2 d-block inside">Enter your post code</span>
      </div>
      <div className="mx-auto d-block border mt-4" id="pop">
        <span className="ms-3 mt-2 d-block inside">Choose your store</span>
      </div>
      <button className="btn mt-5 log-btn d-block">
        <Link to={`${BaseUrl}location`}>Start Shopping</Link>
      </button>
    </main>
  );
}

export default TheLocation;
