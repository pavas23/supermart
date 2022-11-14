import { useState } from "react";
import { useNavigate } from "react-router";
import "../css/login.css";

export default function SignUp() {

    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name:"",
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/customer/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name:credentials.name,
                email: credentials.email,
                password: credentials.password,
            }),
        });
        window.alert("Account created Successfully!!");
        navigate("/user/login",{replace:true});
    }

    const onChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <>
            <div id="login">
                <h1>SignUp to Online Supermarket</h1>
                <form method="POST" onSubmit={handleSubmit} autoComplete="off" id="login-form">
                    <input type="text" name="name" id="input_name" required onChange={onChange} value={credentials.name} placeholder="Enter your name" />
                    <input type="email" name="email" id="input_email" value={credentials.email} onChange={onChange} required placeholder="Enter your user ID" />
                    <input type="password" name="password" id="input_password" value={credentials.password} onChange={onChange} required placeholder="Enter your password" />
                    <input type="submit" value="SignUp" id="login-btn" />
                </form>
            </div>
        </>
    );
}





