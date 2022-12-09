import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../js/Login";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function Login() {

    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://127.0.0.1:9001/login/auth/customer", {
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
        console.log(json);
        // const data = {
        //     user:{
        //         id:json.id,
        //     }
        // }

        // const authtoken = jwt.sign(data,JWTsecret);
        console.log(json.verify);
        if (json.verify) {
            localStorage.setItem("token", "!@!@#123131231231212312dfdsfsfsds");
            navigate("/", { replace: true });
            // TODO: AUTHTOKEN
        }
        else {
            console.log("hello");
            navigate("/login", { replace: true });
            window.alert("Invalid Credentials");
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

<Navbar features={false}/>

            <div class="login_page4">
                <div class="form-box4" style={{ marginTop: "20vh" }}>
                    <div class="button-box6">
                        <div id="btn8" style={{
                            "top": "0", "left": "0", "position": "absolute", "width": "120px", "padding-left": "2%", "padding-top": "2%",
                            "height": "130%", "background": "linear-gradient(to right, #22db15, #fbff00)", "border-radius": "30px",
                            "transition": "0.5s"
                        }}>Log-In as User</div>
                        <button type="button"></button>
                    </div>
                    <form method="POST" onSubmit={handleSubmit} autoComplete="off" id="login-form">
                        <input type="email" name="email" id="input_email" value={credentials.email.toLowerCase()} onChange={onChange} required placeholder="Enter your user ID"
                            style={{
                                "width": "75%", "padding": "10px 0", "margin": "5px 0", "border-left": "0", "border-top": "0", "border-right": "0",
                                "border-bottom": "1px solid #999", "outline": "none", "background": "transparent", "marginTop": "60px",
                                "marginLeft": "40px", "marginRight": "40px"
                            }} />

                        <input type="password" name="password" id="input_password" value={credentials.password.toLowerCase()} onChange={onChange} required placeholder="Enter your password"
                            style={{
                                "width": "75%", "padding": "10px 0", "margin": "5px 0", "border-left": "0", "border-top": "0", "border-right": "0",
                                "border-bottom": "1px solid #999", "outline": "none", "background": "transparent", "marginLeft": "40px"
                            }} />

                        <input type="submit" value="Login" id="login-btn"
                            style={{
                                "width": "60%", "padding": "10px 30px", "cursor": "pointer", "display": "block", "margin": "auto",
                                "background": "linear-gradient(to right, #22db15, #fbff00)", "border": "0", "outline": "none", "border-radius": "30px",
                                "marginTop": "20px"
                            }} />

                        <Link to="/forgot"><a class="forgot4" style={{ "marginLeft": "200px", "marginBottom": "30px" }}>Forgot password?</a></Link>
                        <Link to="/register"><a class="forgot5" style={{ "marginLeft": "80px", "marginBottom": "50px" }}>Register</a></Link>
                        <Link to="/man_log"><a class="man_log4" style={{ "marginLeft": "200px", "marginTop": "190px" }}>Log in as Manager</a></Link>
                        <Link to="/admin_log"><a class="admin_log4" style={{ "marginLeft": "80px", "marginTop": "190px" }}>Log in as Admin</a></Link>

                    </form>
                </div>
            </div>
        </>
    );

}
