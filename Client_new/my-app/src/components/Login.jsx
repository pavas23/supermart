import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../js/Login";
export default function Login(){
    return(
        <>
             <div class="login_page4">
            <div class="form-box4">
                <div class="button-box4">
                    <div id="btn4" style={{"margin-left":"7vh"}}></div>
                    <button type="button4" class="toggle-btn4" onclick="login()" style={{"margin-left":"8vh"}}>Log in</button>
                    <button type="button4" class="toggle-btn4" onclick="register()" style={{"margin-left":"7vh"}}>Register</button>
                </div>
                <form id = "login4" class="input-group4">
                    <input type = "text4" class="input-field4" placeholder="UserID" required/>
                    <input type = "password4" id = "pass4" class="input-field4" placeholder="Enter Password" required/><span id ="eye"><i class="fas fa-eye" onclick="toggle()"></i></span>
                    <input type="checkbox" class="check-box4"/><span>Remember Password</span>
                    <Link to="/forgot"><a class="forgot4">Forgot password?</a></Link>
                    <Link to="/man_log"><a class="man_log4">Log in as Manager</a></Link>
                    <Link to="/admin_log"><a class="admin_log4">Log in as Admin</a></Link>
                    <button type="submit" class = "submit-btn4">Log in</button>
                </form>
                <form id = "register4" class="input-group4">
                    <input type = "text" class="input-field4" placeholder="UserID" required/>
                    <input type = "email" class="input-field4" placeholder="EmailID" required/>
                    <input type = "password" id = "pass5" class="input-field4" placeholder="Enter Password" required/><span id ="eye1"><i class="fas fa-eye" onclick="toggle1()"></i></span>
                    <input type="checkbox" class="check-box4"/><span>I agree to the terms and conditions</span>
                    <button type="submit" class = "submit-btn4">Register</button>
                </form>
            </div>
        </div>
        </>
    );
}