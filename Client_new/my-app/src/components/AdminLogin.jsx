
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
            <div class="login_page">
                <div class="form-box">
                    <div class="button-box1">
                        <div id="btn1"></div>
                        <button type="button" class="toggle-btn1" onclick="login()">Log in</button>
                    </div>
                    <form id="login" class="input-group">
                        <input type="text" class="input-field" placeholder="AdminID" required />
                        <input type="password" id="pass" class="input-field" placeholder="Enter Password" required /><span id="eye"><i class="fas fa-eye" onclick="toggle()"></i></span>
                        <input type="checkbox" class="check-box" /><span>Remember Password</span>
                        <a href="forgot.html" class="forgot">Forgot password?</a>
                        <a href="login.html" class="man_log">Log in as User</a>
                        <a href="manager_login.html" class="admin_log">Log in as Manager</a>
                        <button type="submit" class="submit-btn">Log in</button>
                    </form>
                </div>
            </div>
        </>
    );
}

