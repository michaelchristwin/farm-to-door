import "../CSS/styles.css";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";

function ForgotPassword2() {
  return (
    <main>
      <p className="log-t px-2 mt-2">Verification Code</p>
      <span className="indi d-block px-2">
        We just sent you a verification code via a email elias2345@gmail.com.
      </span>
      <div className="d-flex justify-content-around mt-5">
        <input type="text" className="form-control" id="digit" maxLength={1} />
        <input type="text" className="form-control" id="digit" maxLength={1} />
        <input type="text" className="form-control" id="digit" maxLength={1} />
        <input type="text" className="form-control" id="digit" maxLength={1} />
      </div>
      <div className="my-5 mx-4 code">
        <p className="float-start text-danger">Expired 00:59</p>
        <p className="float-end resend">Resend Code</p>
      </div>
      <button className="btn mt-5 log-btn d-block">
        <Link to={`${BaseUrl}/verify-email`}>Verify Account</Link>
      </button>
    </main>
  );
}

export default ForgotPassword2;
