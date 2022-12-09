import { Link } from "react-router-dom";
export default function WalletPayment(){
    return(
<>
        <div className="login_page4">
        <div className="form-box4">
            <div className="button-box1">
                <div id="btn1"></div>
                <button type="button" className="toggle-btn1">Wallet</button>
            </div>
            <form id = "login" className="input-group5">
                <a className="btn6">Balance</a>
                <input type = "text" className="input-field4" placeholder="Increase By" required/>
                
                <Link to="/"><a className="user_log6">Return to home</a></Link>
                <Link to="/checkout"><a className="admin_log5">Return to Cart</a></Link>
                <button type="submit" className= "submit-btn5">Confirm Top Up</button>
            </form>
        </div>
    </div>
</>
    );
}