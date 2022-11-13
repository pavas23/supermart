
import "../css/dropdown.css";

export default function Dropdown(){
    return(
        <>
        <div id = "dropdown-items">
            <ul>
                <li>Fruits&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i></li>
                <li>Vegetables&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i></li>
                <li>Dairy and Bakery&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i></li>
                <li>Snacks&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i></li>
                <li>Beverages&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i></li>
                <li>Personal Care&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i></li>
            </ul>
        </div>
        </>
    );
}



