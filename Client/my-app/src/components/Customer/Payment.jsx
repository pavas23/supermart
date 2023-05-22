/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <>
      <div className="login_page4">
        <div className="form-box4">
          <div className="button-box1">
            <div id="btn1"></div>
            <button type="button" className="toggle-btn1">
              Payment
            </button>
          </div>
          <form id="login" className="input-group5">
            <input
              type="text"
              className="input-field4"
              placeholder="UserID"
              required
            />
            <input
              type="password"
              id="pass"
              className="input-field4"
              placeholder="Enter Password"
              required
            />
            <span id="eye">
              <i className="fas fa-eye" onclick="toggle()"></i>
            </span>
            <a className="btn3">Amount</a>
            <a className="btn5">Balance</a>
            <Link to="/wallet">
              <a className="user_log5">Top up Wallet</a>
            </Link>
            <Link to="/checkout">
              <a className="admin_log5">Return to Cart</a>
            </Link>
            <button type="submit" className="submit-btn5">
              Confirm Payment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
