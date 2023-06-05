/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function Forgot(props) {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
  });

  async function sendOtp() {
    var responseOtp = await fetch(
      `${REACT_APP_APIURL}/customer/forgotPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
        }),
      }
    );
    responseOtp = await responseOtp.json();
    props.setOtpFunction(responseOtp);
    props.setEmailFunction(credentials.email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/reset", { replace: true });
    sendOtp();
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Navbar features={false} />
      <div class="login_page4">
        <div class="form-box4" style={{ marginTop: "12%" }}>
          <div class="button-box2">
            <div id="btn2"></div>
            <button type="button" class="toggle-btn1">
              Forgot Password
            </button>
          </div>

          <form
            method="POST"
            onSubmit={handleSubmit}
            autoComplete="off"
            id="login-form"
          >
            <input
              type="email"
              name="email"
              id="input_email"
              value={credentials.email.toLowerCase()}
              autoCapitalize="off"
              onChange={onChange}
              required
              placeholder="Enter your user ID"
              style={{
                width: "75%",
                padding: "10px 0",
                margin: "5px 0",
                "border-left": "0",
                "border-top": "0",
                "border-right": "0",
                "border-bottom": "1px solid #999",
                outline: "none",
                background: "transparent",
                marginTop: "60px",
                marginLeft: "40px",
                marginRight: "40px",
              }}
            />
            <input
              type="submit"
              value="Send OTP"
              id="login-btn"
              style={{
                width: "50%",
                padding: "10px 30px",
                cursor: "pointer",
                display: "block",
                margin: "auto",
                background: "linear-gradient(to right, #22db15, #fbff00)",
                border: "0",
                outline: "none",
                "border-radius": "30px",
                marginTop: "20px",
              }}
            />
          </form>

          <Link to="/login">
            <a class="link-log" style={{ marginLeft: "260px" }}>
              Or log in?
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
