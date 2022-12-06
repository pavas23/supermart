import { Link } from "react-router-dom";

export default function Forgot(){
    return(
        <>
        <div class="login_page4">
            <div class="form-box4">
                <div class="button-box2">
                    <div id="btn2"></div>
                    <button type="button" class="toggle-btn1">Forgot Password</button>
                </div>
                <form id = "login" class="input-group5">
                    <input type = "text" class="input-field4" placeholder="Enter EmailID" required/>
                    <Link to="/login"><a class="link-log">Or log in?</a></Link>
                    <button type="submit" class = "submit-btn2">Send Email</button>
                </form>
            </div>
        </div>
        </>
    );
}