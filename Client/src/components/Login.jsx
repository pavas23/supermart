import { useState } from "react";
import {useNavigate } from "react-router";
import "../css/login.css";

export default function Login() {

    // const jwt = require("jsonwebtoken");
    // const JWTsecret = "@#$$adbjdb1234";

    let navigate = useNavigate();

    const [credentials,setCredentials] = useState({
        email:"",
        password:"",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/Login/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:credentials.email,
                password:credentials.password,
            }),
        });

        const json  = await response.json();

        // const data = {
        //     user:{
        //         id:json.id,
        //     }
        // }
       
        // const authtoken = jwt.sign(data,JWTsecret);
        console.log(json);

        if(json.email){
            // save auth token and redirect to homepage
            navigate("/", { replace: true });
            // TODO: AUTHTOKEN
            localStorage.setItem("token","pavas123");
        }
        else{
            navigate("/user/login",{replace:true});
            window.alert("Invalid Credentials");
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
            <div id="login">
                <h1>Login to Online Supermarket</h1>
                <form method="POST" onSubmit={handleSubmit} autoComplete="off" id="login-form">
                    <input type="email" name="email" id="input_email" value={credentials.email}  onChange={onChange} required placeholder="Enter your user ID" />
                    <input type="password" name="password" id="input_password" value={credentials.password}  onChange={onChange}  required placeholder="Enter your password" />
                    <input type="submit" value="Login" id="login-btn" />
                </form>
            </div>
        </>
    );
}





