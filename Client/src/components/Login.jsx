import "../css/login.css";
export default function Login() {
    return (
        <>
            <div id="login">
                <h1>Login to Online Supermarket</h1>
                <form method="POST" action="http://127.0.0.1:5000/user/login/submit">
                    <input type="text" name="name" id="input_name" placeholder="Enter your name" />
                    <input type="text" name="email" id="input_email" placeholder="Enter your user ID" />
                    <input type="password" name="password" id="input_password" placeholder="Enter your password" />
                    <input type="submit" value="Login" id="login-btn" />
                </form>
            </div>
        </>
    );
}


