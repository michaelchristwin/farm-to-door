import "../CSS/styles.css";
import Farmtodoor from "../img/farmtodoor.png";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";

function Login() {
  return (
    <main>
      <div className="d-flex logo-div">
        <img src={Farmtodoor} alt="logo" className="top-l" />
      </div>
      <p className="log-t ms-3 mt-2">Login to continue</p>
      <div className="form">
        <input
          type="text"
          className="form-control"
          id="input"
          placeholder="Email"
        />
        <input
          type="text"
          className="form-control mt-4"
          id="input"
          placeholder="Password"
        />
        <button className="btn mt-5 log-btn d-block">
          <Link to={`${BaseUrl}/login`}>Login</Link>
        </button>
      </div>
    </main>
  );
}

export default Login;
