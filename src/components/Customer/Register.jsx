/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "../../css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function Login(props) {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    async function resetPassword() {
      await fetch(`${REACT_APP_APIURL}/customer/reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
    }

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
    }

    async function addCustomer() {
      var response = await fetch(`${REACT_APP_APIURL}/customer/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      response = await response.json();
      if (response) {
        navigate("/otp/signUp", { replace: true });
        props.setEmailFunction(credentials.email);
        sendOtp();
        resetPassword();
      } else {
        window.alert(
          "Make account with BITS Pilani Hyderabad campus ID !! or The account with this id already exists!!"
        );
      }
    }
    addCustomer();
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
        <div class="form-box4" style={{ marginTop: "20vh" }}>
          <div class="button-box7">
            <div
              id="btn9"
              style={{
                top: "0",
                left: "-20px",
                position: "absolute",
                width: "160px",
                "padding-left": "15%",
                "padding-top": "2%",
                height: "130%",
                background: "linear-gradient(to right, #22db15, #fbff00)",
                "border-radius": "30px",
                transition: "0.5s",
              }}
            >
              Register as User
            </div>
            <button type="button4"></button>
          </div>

          <form
            method="POST"
            onSubmit={handleSubmit}
            autoComplete="off"
            id="login-form"
          >
            <input
              type="text"
              name="name"
              id="input_name"
              required
              onChange={onChange}
              value={credentials.name}
              placeholder="Enter your name"
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
                marginLeft: "40px",
              }}
            />

            <input
              type="password"
              name="password"
              id="input_password"
              value={credentials.password}
              onChange={onChange}
              required
              placeholder="Enter your password"
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
                marginLeft: "40px",
              }}
            />

            <input
              type="submit"
              value="SignUp"
              id="login-btn"
              style={{
                width: "30%",
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
            <a class="admin_log6" style={{ marginLeft: "275px" }}>
              Log in
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
