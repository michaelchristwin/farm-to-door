import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";

function ForgotPassword() {
  return (
    <main className="px-2">
      <p className="log-t mt-4">Forgot Password</p>
      <span className="indi2 d-block text-left">
        We will send an email with a confirmation code to this number.
      </span>
      <input
        type="email"
        className="form-control email-fp"
        id="input"
        placeholder="Email"
      />
      <p className="text-danger ms-4 mt-3 dang">Please enter a valid email</p>
      <button className="btn mt-5 log-btn d-block">
        <Link to={`${BaseUrl}/forgot-password`}>Next</Link>
      </button>
    </main>
  );
}

export default ForgotPassword;
