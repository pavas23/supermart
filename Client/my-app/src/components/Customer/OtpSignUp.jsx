import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function OtpSignUp(props) {
  let navigate = useNavigate();
  const [credentials, setOtp] = useState({
    otp: "",
  });

  async function verificationOfOTP(verifyBool) {
    var response = await fetch("http://127.0.0.1:9001/customer/verify", {
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
      console.log("outer");
      if (parseInt(credentials.otp) === parseInt(props.otpApp)) {
        console.log("hello");
        window.alert("Account created Successfully!!");
        verificationOfOTP(true);
        console.log("after callin verify");
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
      <div class="login_page4">
        <div class="form-box4">
          <div class="button-box7">
            <div id="btn9">OTP verification</div>
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
              name="otp"
              id="input_password"
              value={credentials.otp}
              onChange={onChange}
              required
              placeholder="Enter your OTP"
            />
            <input type="submit" value="SignUp" id="login-btn" />
          </form>
          <Link to="/login">
            <a class="admin_log6">Submit</a>
          </Link>
        </div>
      </div>
    </>
  );
}
