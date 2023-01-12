import "../CSS/styles.css";
import { Link } from "react-router-dom";
import BaseUrl from "../JSX/BaseUrl";

function EmailVerify() {
  return (
    <main>
      <p className="log-t ms-4 mt-2">Verify your Email</p>
      <span className="indi d-block ms-4">
        Enter the 4-digit code we sent you.
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
        <Link to={`${BaseUrl}/verify-email`}>Continue</Link>
      </button>
    </main>
  );
}

export default EmailVerify;
