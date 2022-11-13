import "../css/navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">OnlineMart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav col-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><i className="fa-sharp fa-solid fa-location-dot"></i>&nbsp;&nbsp;Location</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/user/login"><i className="fa-solid fa-user"></i>&nbsp;&nbsp;Login</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Sign Up</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search for products and categories..." aria-label="Search" />
              <button className="btn btn-outline-white text-white" type="submit"><i className="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="cart-ul">
            <li className="nav-item" id="cart-li">
         <a className="nav-link active" aria-current="page" href="#">   <i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


