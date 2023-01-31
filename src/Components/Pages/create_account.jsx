import "../CSS/styles.css";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";
import GLogo from "../img/google.png";
import Apple from "../img/apple.png";
import { useNavigate } from "react-router-dom";
import Back from "../img/back-t.png";

function CreateAcount() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main>
      <button onClick={goBack} className="back-btn ms-2 mt-3">
        <img src={Back} alt="button" className="hello" />
      </button>
      <p className="log-t ms-3 mt-2">Let's Get Started</p>
      <span className="indi d-block ms-3">
        Create account to see top pick for you!
      </span>
      <div className="form mt-5">
        <input
          type="email"
          className="form-control"
          id="input"
          placeholder="Email"
        />
        <input
          type="password"
          className="form-control mt-4"
          id="input"
          placeholder="Password"
        />
        <input
          type="password"
          className="form-control mt-4"
          id="input"
          placeholder="Confirm Password"
        />
        <button className="btn mt-5 log-btn d-block">
          <Link to={`${BaseUrl}/verify-email`}>Create Account</Link>
        </button>
      </div>
      <span className="d-block text-center my-4">or</span>
      <div className="google d-block p-2">
        <span className="cont-g d-block py-2">
          <img src={GLogo} alt="google logo" className="g-logo mx-4" /> Continue
          with Google
        </span>
      </div>
      <div className="google d-block p-2 mt-2">
        <span className="cont-g d-block py-2">
          <img src={Apple} alt="google logo" className="g-logo mx-4" /> Continue
          with Apple
        </span>
      </div>
    </main>
  );
}

export default CreateAcount;
