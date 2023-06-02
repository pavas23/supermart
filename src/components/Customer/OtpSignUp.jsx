import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function OtpSignUp(props) {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  let navigate = useNavigate();
  const [credentials, setOtp] = useState({
    otp: "",
  });

  async function verificationOfOTP(verifyBool) {
    await fetch(`${REACT_APP_APIURL}/customer/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.email,
        verify: verifyBool,
      }),
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    async function checkOtp() {
      if (parseInt(credentials.otp) === parseInt(props.otpApp)) {
        window.alert("Account created Successfully!!");
        verificationOfOTP(true);
        navigate("/login", { replace: true });
      } else {
        verificationOfOTP(false);
        window.alert("Incorrect OTP");
      }
    }
    checkOtp();
  };

  const onChange = (event) => {
    setOtp({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Navbar features={false} />
      <div class="login_page4">
        <div class="form-box4" style={{ marginTop: "12%" }}>
          <div class="button-box7">
            <div
              id="btn9"
              style={{
                textAlign: "center",
              }}
            >
              OTP verification
            </div>
            <button type="button4"></button>
          </div>
          <form
            method="POST"
            onSubmit={handleSubmit}
            autoComplete="off"
            id="login-form"
            style={{ height: "80%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "40%",
              }}
            >
              <input
                type="text"
                name="otp"
                id="input_password"
                value={credentials.otp}
                onChange={onChange}
                required
                placeholder="Enter your OTP"
                style={{
                  "margin-right": "6px",
                  padding: "6px",
                }}
              />
              <input
                type="submit"
                value="Submit"
                id="login-btn"
                style={{
                  width: "25%",
                  borderRadius: "10px",
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
