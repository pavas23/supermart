import { Link } from "react-router-dom";
export default function AdminLogin() {
    var pass_t = document.getElementById("pass");
    function toggle() {
        if (pass_t.type == "password") {
            pass_t.type = "text";
        }
        else {
            pass_t.type = "password";
        }
    }
    return (
        <>
            <div class="login_page4">
                <div class="form-box4">
                    <div class="button-box1">
                        <div id="btn1"></div>
                        <button type="button" class="toggle-btn1" onclick="login()">Log in</button>
                    </div>
                    <form id="login4" class="input-group4">
                        <input type="text" class="input-field4" placeholder="AdminID" required />
                        <input type="password" id="pass4" class="input-field5" placeholder="Enter Password" required /><span id="eye"><i class="fas fa-eye" onclick="toggle()"></i></span>
                        <input type="checkbox" class="check-box4" /><span>Remember Password</span>
                        <Link to="/forgot"><a class="forgot4">Forgot password?</a></Link>
                        <Link to="/login"><a class="user_log4">Log in as User</a></Link>
                        <Link to="/man_log"><a class="admin_log4">Log in as Manager</a></Link>
                        <button type="submit" class="submit-btn4">Log in</button>
                    </form>
                </div>
            </div>
        </>
    );
}

