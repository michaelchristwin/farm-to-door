import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";
import "../CSS/styles.css";
import { useNavigate } from "react-router-dom";
import Back from "../img/back-t.png";

function ForgotPassword3() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main>
      <button onClick={goBack} className="back-btn ms-2 mt-3">
        <img src={Back} alt="button" className="hello" />
      </button>
      <p className="log-t ps-4 mt-3">Change Password</p>
      <span className="indi d-block ps-4 mb-3">Enter your New password</span>
      <div className="form pt-5">
        <input
          type="text"
          className="form-control"
          id="input"
          placeholder="Current Password"
        />
        <input
          type="text"
          className="form-control mt-4"
          id="input"
          placeholder="New Password"
        />
        <button className="btn mt-5 log-btn d-block">
          <Link to={`${BaseUrl}/forgot-password3`}>Change</Link>
        </button>
      </div>
    </main>
  );
}

export default ForgotPassword3;
