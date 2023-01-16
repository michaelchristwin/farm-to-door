import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";
import "../CSS/styles.css";

function ForgotPassword3() {
  return (
    <main>
      <p className="log-t ps-4 mt-5">Change Password</p>
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
