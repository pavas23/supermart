/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "../../css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login(props) {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    async function sendOtp() {
      var responseOtp = await fetch(
        "http://127.0.0.1:9001/customer/forgotPassword",
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
      console.log(responseOtp);
      props.setOtpFunction(responseOtp);
    }

    async function addCustomer() {
      var response = await fetch("http://127.0.0.1:9001/customer/add", {
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

      console.log(credentials.email);
      response = await response.json();
      console.log(response);
      if (response) {
        navigate("/otp/signUp", { replace: true });
        props.setEmailFunction(credentials.email);
        sendOtp();
      } else {
        window.alert(
          "Make account with BITS Pilani Hyderabad campus ID !!! or The account with this id already exists!!"
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
      <header className="header2">
        <Link to="/" className="logo">
          {" "}
          <i className="fas fa-shopping-basket"></i> BBB{" "}
        </Link>

        <nav className="navbar2">
          <Link to="/">Home</Link>
          <Link to="/mainProducts">Products</Link>
          <Link to="/review">Review</Link>
        </nav>

        <div className="icons">
          <div className="fas fa-search" id="search-btn"></div>
          <Link to="/checkout">
            <div className="fas fa-shopping-cart" id="cart-btn"></div>
          </Link>
          <Link to="/products">
            <div className="fas fa-plus" id="add-btn"></div>
          </Link>
          <Link to="/login">
            <div className="fas fa-user" id="login-btn"></div>
          </Link>
        </div>

        <form action="" className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>

        <div className="shopping-cart">
          <div className="box2">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </header>
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
