/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Customer/Navbar";
import { useEffect } from "react";

export default function AdminLogin() {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const addAdmin = async () => {
    await fetch(`${REACT_APP_APIURL}/admin/add`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Admin",
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      }),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${REACT_APP_APIURL}/login/auth/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.email !== null) {
      localStorage.setItem("adminToken", json.authToken);
      navigate("/products", { replace: true });
    } else {
      window.alert("Invalid Manager Credentials");
      credentials.email = "";
      credentials.password = "";
      navigate("/man_log", { replace: true });
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    addAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div class="login_page4">
        <div class="form-box4" style={{ marginTop: "20vh" }}>
          <div class="button-box1">
            <div
              id="btn1"
              style={{
                top: "0",
                left: "0px",
                position: "absolute",
                width: "130px",
                "padding-left": "7%",
                "padding-top": "2%",
                height: "130%",
                background: "linear-gradient(to right, #22db15, #fbff00)",
                "border-radius": "30px",
                transition: "0.5s",
              }}
            >
              Log in as Admin
            </div>
            <button
              type="button"
              class="toggle-btn1"
              onclick="login()"
            ></button>
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
              value={credentials.email}
              onChange={onChange}
              required
              placeholder="Enter Admin ID"
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
              value="Login"
              id="login-btn"
              style={{
                width: "60%",
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
            <a
              class="user_log4"
              style={{ marginLeft: "80px", marginTop: "190px" }}
            >
              Log in as User
            </a>
          </Link>
          <Link to="/man_log">
            <a
              class="admin_log4"
              style={{ marginLeft: "200px", marginTop: "190px" }}
            >
              Log in as Manager
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
