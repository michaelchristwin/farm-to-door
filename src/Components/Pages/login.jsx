import "../CSS/styles.css";
import Farmtodoor from "../img/farmtodoor.png";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";
import { useNavigate } from "react-router-dom";
import Back from "../img/back-t.png";

function Login() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main>
      <div className="d-flex logo-div mt-3">
        <button onClick={goBack} className="back-btn ms-2">
          <img src={Back} alt="button" className="hello" />
        </button>
        <img src={Farmtodoor} alt="logo" className="top-l me-2" />
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

        <Link to={`${BaseUrl}/create-account`}>
          <button className="btn mt-5 log-btn d-block">Login </button>
        </Link>
      </div>
    </main>
  );
}

export default Login;
