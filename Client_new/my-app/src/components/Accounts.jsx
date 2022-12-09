import "../css/bootstrap.min.css";
import "../css/bootstrap-grid.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import NavbarAdmin from "./NavbarAdmin";

export default function Accounts() {

  const adminLogin = localStorage.getItem('adminToken');
  let navigate = useNavigate();

  useEffect(()=>{
    if(!adminLogin){
      navigate("/admin_log", { replace: true });
    }
  },[]);
  
  return (
    <>
   <div className="" id="home">
      <NavbarAdmin/>
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
                  <label className="tm-hide-sm">&nbsp;</label>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{"color":"black"}}
                  >
                    Reset Password
                  </button>
                </div>
                
                
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{"color":"black","width":"fit-content","margin-left":"24vh"}}
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
