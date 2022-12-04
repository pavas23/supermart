import "../css/bootstrap.min.css";
import "../css/bootstrap-grid.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";

export default function Accounts() {
  return (
    <>
   <div className="" id="home">
      <nav className="navbar navbar-expand-xl">
        <div className="container h-100">
          <Link to="/dashboard"><a className="navbar-brand">
            <h1 className="tm-site-title mb-0">Product Admin</h1>
          </a></Link>
          <button
            className="navbar-toggler ml-auto mr-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars tm-nav-icon"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100">
              <li className="nav-item">
              <Link to="/dashboard"><a className="nav-link">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                  <span className="sr-only">(current)</span>
                </a></Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="far fa-file-alt"></i>
                  <span> Reports <i className="fas fa-angle-down"></i> </span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Daily Report</a>
                  <a className="dropdown-item" href="#">Weekly Report</a>
                  <a className="dropdown-item" href="#">Yearly Report</a>
                </div>
              </li>
              <li className="nav-item">
              <Link to="/products"><a className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Products
                </a></Link>
              </li>

              <li className="nav-item">
                <Link to="/accounts"><a className="nav-link active">
                  <i className="far fa-user"></i> Accounts
                </a></Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/settings"><a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-cog"></i>
                  <span> Settings <i className="fas fa-angle-down"></i> </span>
                </a></Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">Billing</a>
                  <a className="dropdown-item" href="#">Customize</a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login"><a className="nav-link d-block">
                  <b>Logout</b>
                </a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5" style={{"display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center"}}>
        <div className="row tm-content-row">
          <div className="col-12 tm-block-col">
            
          </div>
        </div>
        
          
          <div className="tm-block-col tm-col-account-settings">
            <div className="tm-bg-primary-dark tm-block tm-block-settings">
              <h2 className="tm-block-title" style={{"color":"black"}}>My Profile</h2>
              <form action="" className="tm-signup-form row">
                <div className="form-group col-lg-6">
                  <label for="name" style={{"color":"black"}}>Name</label>
                 <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="name" style={{"color":"black"}}> Address</label>
                 <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="phone" style={{"color":"black"}}>Phone</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                  />
                
                  
                  
                  

                </div>
                
                
                <div className="form-group col-lg-6">
                  <label for="email" style={{"color":"black"}}> Email ID</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="password" style={{"color":"black"}}>Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="password2" style={{"color":"black"}}>Change Password</label>
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="phone" style={{"color":"black"}}>Credits</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                  />
                
                  
                  
                  

                </div>
                <div className="form-group col-lg-6">
                  <label className="tm-hide-sm">&nbsp;</label>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{"color":"black"}}
                  >
                    Add Credits 
                  </button>
                </div>
                <div className="form-group col-lg-6">
                  <label className="tm-hide-sm">&nbsp;</label>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{"color":"black"}}
                  >
                    Update Your Profile
                  </button>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{"color":"black"}}
                  >
                    Delete Your Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="tm-footer row tm-mt-small">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            Copyright &copy; <b>2018</b> All rights reserved. 
            
            Design: <a rel="nofollow noopener" href="https://templatemo.com" className="tm-footer-link">Template Mo</a>
          </p>
        </div>
      </footer>
    </>
  );
}
