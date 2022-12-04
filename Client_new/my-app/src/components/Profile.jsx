import { Link } from "react-router-dom";

export default function Profile(){
    <>
    <div class="login_page">
            <div class="form-box1">
                <div class="button-box1">
                    <div id="btn1"></div>
                    <button type="button" class="toggle-btn1">Forgot Password</button>
                </div>
                <form id = "login" class="input-group1">
                    <input type = "text" class="input-field1" placeholder="Enter EmailID" required/>
                    <Link to="/login"><a href="login.html" class="link-log">Or log in?</a></Link>
                    <button type="submit" class = "submit-btn1">Send Email</button>
                </form>
            </div>
        </div>
    </>
}