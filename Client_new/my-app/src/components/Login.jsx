
export default function Login(){
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");
    var pass_t = document.getElementById("pass");
    var pass_t1 = document.getElementById("pass1");
    function register(){
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left= "110px";
        }
    function login(){
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left= "0px";
        }
    
    function toggle(){
        if(pass_t.type == "password")
        {
            pass_t.type = "text";
        }
        else{
            pass_t.type = "password";
        }
    }

    function toggle1(){
        if(pass_t1.type == "password")
        {
            pass_t1.type = "text";
        }
        else{
            pass_t1.type = "password";
        }
    }
    return(
        <>
             <div class="login_page">
            <div class="form-box">
                <div class="button-box">
                    <div id="btn"></div>
                    <button type="button" class="toggle-btn" onclick="login()">Log in</button>
                    <button type="button" class="toggle-btn" onclick="register()">Register</button>
                </div>
                <form id = "login" class="input-group">
                    <input type = "text" class="input-field" placeholder="UserID" required/>
                    <input type = "password" id = "pass" class="input-field" placeholder="Enter Password" required/><span id ="eye"><i class="fas fa-eye" onclick="toggle()"></i></span>
                    <input type="checkbox" class="check-box"/><span>Remember Password</span>
                    <a href="forgot.html" class="forgot">Forgot password?</a>
                    <a href="manager_login.html" class="man_log">Log in as Manager</a>
                    <a href="admin_login.html" class="admin_log">Log in as Admin</a>
                    <button type="submit" class = "submit-btn">Log in</button>
                </form>
                <form id = "register" class="input-group">
                    <input type = "text" class="input-field" placeholder="UserID" required/>
                    <input type = "email" class="input-field" placeholder="EmailID" required/>
                    <input type = "password" id = "pass1" class="input-field" placeholder="Enter Password" required/><span id ="eye1"><i class="fas fa-eye" onclick="toggle1()"></i></span>
                    <input type="checkbox" class="check-box"/><span>I agree to the terms and conditions</span>
                    <button type="submit" class = "submit-btn">Register</button>
                </form>
            </div>
        </div>
        </>
    );
}