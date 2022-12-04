import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
export default function EditProd() {
  return (
    <>
       <div clas="container">
    <nav className="navbar navbar-expand-xl navbar-dark" style={{"backgroundColor":"#0e511e"}}>
      <div className="container h-100">
      <Link to="/dashboard"><a className="navbar-brand">
          <h1 className="tm-site-title mb-0">Admin Dashboard</h1>
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
              <li className="nav-item">
              <Link to="/products"><a className="nav-link active">
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
              <Link to="/login"><a className="nav-link d-block">
                  <h6>Logout</h6>
                </a></Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
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
