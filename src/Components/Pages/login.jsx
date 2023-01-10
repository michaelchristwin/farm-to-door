import "../CSS/styles.css";
import Farmtodoor from "../img/farmtodoor.png";

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
          id="email"
          placeholder="Email"
        />
      </div>
    </main>
  );
}

export default Login;
