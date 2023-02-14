import { useState } from "react";
import { useNavigate } from "react-router";

export default function Reset(props) {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        otp: "",
        password: "",
    });

    async function resetPassword() {
        var response = await fetch("http://127.0.0.1:9001/customer/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: props.email,
                password: credentials.password,
            }),
        });
        navigate("/login", { replace: true });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (parseInt(credentials.otp) === parseInt(props.otpApp)) {
            resetPassword();
        }
        else {
            window.alert("OTP Invalid!!");
        }
    }

    const onChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <>
            <div class="login_page4">
                <div class="form-box4">
                    <div class="button-box1">
                        <div id="btn1" style={{
                            "top": "0", "left": "-25px", "position": "absolute", "width": "160px", "padding-left": "20%", "padding-top": "2%",
                            "height": "130%", "background": "linear-gradient(to right, #22db15, #fbff00)", "border-radius": "30px",
                            "transition": "0.5s"
                        }}>Reset Password</div>
                        <button type="button" class="toggle-btn1"></button>
                    </div>

                    <form method="POST" onSubmit={handleSubmit} autoComplete="off" id="login-form">
                        <input type="text" name="otp" id="input_password" value={credentials.otp} onChange={onChange} required placeholder="Enter your OTP"
                            style={{
                                "width": "75%", "padding": "10px 0", "margin": "5px 0", "border-left": "0", "border-top": "0", "border-right": "0",
                                "border-bottom": "1px solid #999", "outline": "none", "background": "transparent", "marginTop": "60px",
                                "marginLeft": "40px", "marginRight": "40px"
                            }} />

                        <input type="password" name="password" id="input_password" value={credentials.password} onChange={onChange} required placeholder="Enter your password"
                            style={{
                                "width": "75%", "padding": "10px 0", "margin": "5px 0", "border-left": "0", "border-top": "0", "border-right": "0",
                                "border-bottom": "1px solid #999", "outline": "none", "background": "transparent", "marginLeft": "40px"
                            }} />

                        <input type="submit" value="Reset" id="login-btn"
                            style={{
                                "width": "30%", "padding": "10px 30px", "cursor": "pointer", "display": "block", "margin": "auto",
                                "background": "linear-gradient(to right, #22db15, #fbff00)", "border": "0", "outline": "none", "border-radius": "30px",
                                "marginTop": "20px"
                            }} />
                    </form>
                </div>
            </div>
        </>
    );
}