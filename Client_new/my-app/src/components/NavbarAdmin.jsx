import { Link } from "react-router-dom";

export default function NavbarAdmin(){

    const handleLogout = () =>{
        localStorage.removeItem("adminToken");
    }

    return(
        <>
            <nav className="navbar navbar-expand-xl">
            <div className="container h-100">
            <Link to="/dashboard"><a className="navbar-brand">
                    <h1 className="tm-site-title mb-0">Product Admin</h1>
                </a></Link>
                <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars tm-nav-icon"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100">
              <li className="nav-item">
              <Link to="/dashboard"><a className="nav-link active">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                  <span className="sr-only">(current)</span>
                </a></Link>
              </li>
              <li className="nav-item">
              <Link to="/products"><a className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Products
                </a></Link>
              </li>
  
              <li className="nav-item">
              <Link to="/accounts"><a className="nav-link">
                  <i className="far fa-user"></i> Accounts
                </a></Link>
              </li>
              <li className="nav-item">
              <Link to="/settings"><a
                  className="nav-link"
                  >
                  <i className="fas fa-cog"></i>
                  <span> Settings </span>
                </a></Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/login" onClick={handleLogout}><a className="nav-link d-block">
                  <h6>Logout</h6>
                </a></Link>
              </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}