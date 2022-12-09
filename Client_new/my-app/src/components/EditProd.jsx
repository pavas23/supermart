import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import NavbarAdmin from "./NavbarAdmin";

export default function EditProd() {
  const adminLogin = localStorage.getItem('adminToken');
  let navigate = useNavigate();
  
  useEffect(()=>{
    if(!adminLogin){
      navigate("/admin_log", { replace: true });
    }
  },[]);
  return (
    <>
       <div clas="container">
    <NavbarAdmin/>
  </div>
  <div className="d-flex" style={{"backgroundImage":"url('./img/bg.jpeg')", "backgroundSize":"60% 100%"}}>
    <div className="container tm-mt-small tm-mb-big">
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto" style={{"backgroundColor":"#2e613a","opacity":"0.94"}}>
            <div className="row">
              <div className="col-12">
                <h2 className="tm-block-title d-inline-block">Edit Product</h2>
              </div>
            </div>
            <div className="row tm-edit-product-row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <form action="" method="post" className="tm-edit-product-form">
                  <div className="form-group mb-3">
                    <label
                      for="name"
                      >Product Name
                    </label>
                    <input style={{"backgroundColor":"rgb(244, 243, 243)","color": "black"}}
                      id="name"
                      name="name"
                      type="text"
                      value="Carrot"
                      className="form-control validate"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      for="price"
                      >Price</label
                    >
                    <input style={{"backgroundColor":"rgb(244, 243, 243)","color": "black"}}
                      id="price"
                      name="price"
                      type="text"
                      value="25"
                      className="form-control validate"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      for="category"
                      >Category</label
                    >
                    <select style={{"backgroundColor":"rgb(244, 243, 243)","color": "black"}}
                      className="custom-select tm-select-accounts"
                      id="category"
                    >
                      <option>Select category</option>
                      <option value="1">Fresh Meats</option>
                      <option value="2">Toiletries</option>
                      <option value="3">Dairy Product</option>
                      <option value="4" selected>Vegetables</option>
                      <option value="5">Fresh Fruits</option>
                    </select>
                  </div>
                  <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            for="expire_date"
                            >Expiry Date
                          </label>
                          <input style={{"backgroundColor":"rgb(244, 243, 243)","color": "black"}}
                            id="expire_date"
                            name="expire_date"
                            type="text"
                            value="-"
                            className="form-control validate"
                            data-large-mode="true"
                          />
                        </div>
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            for="stock"
                            >Units In Stock
                          </label>
                          <input style={{"backgroundColor":"rgb(244, 243, 243)","color": "black"}}
                            id="stock"
                            name="stock"
                            type="text"
                            value="55"
                            className="form-control validate"
                            required
                          />
                        </div>
                  
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                <div className="tm-product-img-edit mx-auto" style={{"backgroundColor":"rgb(244, 243, 243)"}}>
                  <img src={require("../img/carrots.jpg")} alt="Product image" className="img-fluid d-block mx-auto" style={{"width":"330px", "height":"240px"}}/>
                  <i
                    className="fas fa-cloud-upload-alt tm-upload-icon"
                    onclick="document.getElementById('fileInput').click();"
                  ></i>
                </div>
                <div className="custom-file mt-3 mb-3">
                  <input id="fileInput" type="file" style={{"display":"none"}} />
                  <input
                    type="button"
                    className="btn btn-primary btn-block mx-auto"
                    value="CHANGE IMAGE NOW"
                    onclick="document.getElementById('fileInput').click();"
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block text-uppercase">Update Now</button>
              </div>
            </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
