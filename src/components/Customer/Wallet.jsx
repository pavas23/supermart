/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

export default function WalletPayment() {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState(0);
  const [customer, setCustomer] = useState({});

  const userLogin = localStorage.getItem("token");
  let navigate = useNavigate();
  if (!userLogin) {
    navigate("/login", { replace: true });
  }

  async function getCust(id) {
    var customer = await fetch(`${REACT_APP_APIURL}/customer/getCustomer`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    customer = await customer.json();
    setBalance(customer.credit);
    setCustomer(customer);
  }

  async function getCustomerID(authTokenObj) {
    var response = await fetch(
      `${REACT_APP_APIURL}/login/auth/customer/getID`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authTokenObj),
      }
    );
    response = await response.json();
    getCust(response);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(`${REACT_APP_APIURL}/customer/addCredit`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: customer.email,
        credit: parseInt(topUpAmount),
      }),
    });
    window.alert("Balance Updated!!");
    setBalance(parseInt(balance) + parseInt(topUpAmount));
  };

  useEffect(() => {
    getCustomerID({ authToken: localStorage.getItem("token") });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="login_page4">
        <div className="form-box4" style={{ marginTop: "12%" }}>
          <div className="button-box1">
            <div id="btn1"></div>
            <button type="button" className="toggle-btn1">
              Wallet
            </button>
          </div>
          <form
            id="login"
            className="input-group5"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <text className="btn6">{balance}</text>
            <input
              type="number"
              min="1"
              max="10000"
              value={topUpAmount}
              onChange={(e) => {
                setTopUpAmount(e.target.value);
              }}
              className="input-field4"
              required
            />
            <Link to="/">
              <a className="user_log6">Return to home</a>
            </Link>
            <Link to="/checkout">
              <a className="admin_log5">Return to Cart</a>
            </Link>
            <button type="submit" className="submit-btn5">
              Confirm Top Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
