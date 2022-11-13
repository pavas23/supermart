
import "../css/footer.css";

export default function Footer(){
    return(
        <>
            <div id = "footer-main">
                <div id = "row-1">
                    <p>bbb@gmail.com, +91 1234567890</p>
                </div>
                <div id = "row-2">
                   <p> Customer Service: +91 4040404040 </p>
                </div>
                <div id = "row-3">
                    <div id = "socialIcons">
                        <ul>
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

