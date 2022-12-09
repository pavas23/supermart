import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate } from "react-router";
import Navbar from "./Navbar";

export default function AdminLogin() {

    let navigate = useNavigate();

    const [credentials,setCredentials] = useState({
        email:"",
        password:"",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(credentials.email == "bbbsupermart@gmail.com" && credentials.password=="adminpass"){
            localStorage.setItem("adminToken", "ddwd12312312");
            navigate("/", { replace: true });
        }
        else{
            window.alert("Wrong Admin ID!");
            return;
        }

    }

    const onChange = (event)=>{
        setCredentials({
            ...credentials,
            [event.target.name]:event.target.value,
        });
    }

    return (
        <>
            <Navbar features={false}/>
            <div class="login_page4">
                <div class="form-box4" style={{ marginTop: "20vh" }}>
                    <div class="button-box1">
                        <div id="btn1"></div>
                        <button type="button" class="toggle-btn1" onclick="login()">Log in</button>
                    </div>
                    <form method="POST" onSubmit={handleSubmit} autoComplete="off" id="login-form">
                        <input type="email" name="email" id="input_email" value={credentials.email} onChange={onChange} required placeholder="Enter Admin ID" />
                        <input type="password" name="password" id="input_password" value={credentials.password} onChange={onChange} required placeholder="Enter your password" />
                        <input type="submit" value="Login" id="login-btn" />
                    </form>
                    <Link to="/forgot"><a class="forgot4">Forgot password?</a></Link>
                    <Link to="/login"><a class="user_log4">Log in as User</a></Link>
                    <Link to="/man_log"><a class="admin_log4">Log in as Manager</a></Link>
                </div>
            </div>
        </>
    );
}

