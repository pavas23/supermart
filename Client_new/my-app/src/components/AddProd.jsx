import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
export default function AddProd() {
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
              <Link to ="/dashboard"><a className="nav-link">
                <i className="fas fa-tachometer-alt"></i> Dashboard
                <span className="sr-only">(current)</span>
              </a></Link>
            </li>
            
            <li className="nav-item">
            <Link to ="/products"><a className="nav-link active">
                <i className="fas fa-shopping-cart"></i> Products
              </a></Link>
            </li>

            <li className="nav-item">
            <Link to ="/accounts"><a className="nav-link">
                <i className="far fa-user"></i> Accounts
              </a></Link>
            </li>
            <li className="nav-item">
            <Link to ="/settings"><a
                className="nav-link dropdown-toggle"
              >
                <i className="fas fa-cog"></i>
                <span> Settings </span>
              </a></Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to ="/login"><a className="nav-link d-block">
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
          <div className="tm-bg-primary-light tm-block tm-block-h-auto" style={{"backgroundColor":"#2e613a","opacity":"0.94","margin-left":"12vh"}}>
            <div className="row">
              <div className="col-12">
                <h2 className="tm-block-title d-inline-block">Add Product</h2>
              </div>
            </div>
            <div className="row tm-edit-product-row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <form action="" className="tm-edit-product-form">
                  <div className="form-group mb-3">
                    <label
                      htmlFor="name" style={{"margin-left":"22vh"}}
                      >Product Name
                    </label>
                    <input style={{"backgroundColor":"rgb(244, 243, 243)","color": "black","margin-left":"22vh"}}
                      id="name"
                      name="name"
                      type="text"
                      className="form-control validate"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="price" style={{"margin-left":"22vh"}}
                      >Price</label
                    >
                    <input style={{"backgroundColor":"rgb(244, 243, 243)","color": "black","margin-left":"22vh"}}
                    id="price"
                    name="price"
                    type="text"
                    className="form-control validate"
                    required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="category" style={{"margin-left":"22vh"}}
                      >Category</label
                    >
                    <select style={{"backgroundColor":"rgb(244, 243, 243)","color": "black","margin-left":"22vh"}}
                      className="custom-select tm-select-accounts"
                      id="category"
                    >
                      <option selected>Select Category</option>
                      <option value="1">Fresh Meat</option>
                      <option value="2">Toiletries</option>
                      <option value="3">Dairy Product</option>
                      <option value="4">Vegetables</option>
                      <option value="5">Fresh Fruits</option>
                    </select>
                  </div>
                  <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="expire_date" style={{"margin-left":"22vh"}}
                            >Expiry Date
                          </label>
                          <input style={{"backgroundColor":"rgb(244, 243, 243)","color": "black","margin-left":"22vh"}}
                            id="expire_date"
                            name="expire_date"
                            type="text"
                            className="form-control validate"
                            data-large-mode="true"
                          />
                        </div>
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="stock" style={{"margin-left":"22vh"}}
                            >Units InStock
                          </label>
                          <input style={{"backgroundColor":"rgb(244, 243, 243)","color": "black","margin-left":"22vh"}}
                            id="stock"
                            name="stock"
                            type="text"
                            className="form-control validate"
                            required
                          />
                        </div>
                  </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                <div className="tm-product-img-dummy mx-auto" style={{"backgroundColor":"rgb(244, 243, 243)","width":"1000px"}}>
                  <i
                    className="fas fa-cloud-upload-alt tm-upload-icon"
                    onclick="document.getElementById('fileInput').click();"
                  ></i>
                </div>
                {/* <div className="custom-file mt-3 mb-3"> */}
                  <input
                    type="button"
                    className="btn btn-primary btn-block mx-auto"
                    value="UPLOAD PRODUCT IMAGE" style={{"max-width":"fit-content","width":"fit-content","margin-left":"22vh"}}
                    onclick="document.getElementById('fileInput').click();"
                    required
                  />
                {/* </div> */}
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block text-uppercase" style={{"margin-left":"22vh"}}>Add Product Now</button>
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
