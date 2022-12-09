import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Settings() {
  return (
    <>
      <div className="container">
          <Navbar/>
    </div>
    <div className="d-flex" style={{"backgroundImage":"url('./img/bg.jpeg')","backgroundSize":"70% 100%",marginTop:"15vh"}}>
    <div className="container mt-5" >
      <div className="row tm-content-row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-products" style={{"backgroundColor": "white"}}>
            <h2 className="tm-block-title" style={{"color":"rgb(54, 39, 17)"}}>My Profile</h2>
              <div className="form-group col-lg-8">
                  <label for="name" style={{"color":"rgb(54, 39, 17)","fontWeight":"bold"}}>Name:</label>
                 <text
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    value="hello"
                    style={{"paddingTop":"13px","fontWeight":"bold"}}
                 >Lorem Ipsum</text>
                </div>
                <div className="form-group col-lg-8">
                  <label for="name" style={{"color":"rgb(54, 39, 17)","fontWeight":"bold"}}>Address:</label>
                 <text
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    style={{"paddingTop":"13px","fontWeight":"bold"}}
                  >Lorem Ipsum</text>
                </div>
                <div className="form-group col-lg-8">
                  <label for="phone" style={{"color":"rgb(54, 39, 17)","fontWeight":"bold"}}>Contact Number:</label>
                  <text
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                    style={{"paddingTop":"13px","fontWeight":"bold"}}
                  >Lorem Ipsum</text>
                </div>
                <div className="form-group col-lg-8">
                  <label for="email" style={{"color":"rgb(54, 39, 17)","fontWeight":"bold"}}>Email Address:</label>
                  <text
                    id="email"
                    name="email"
                    type="email"
                    className="form-control validate"
                    style={{"paddingTop":"13px","fontWeight":"bold"}}
                  >Lorem Ipsum</text>
                </div>
                <div className="form-group col-lg-8">
                  <label for="password" style={{"color":"rgb(54, 39, 17)","fontWeight":"bold"}}>Password:</label>
                  <text
                    id="password"
                    name="password"
                    type="password"
                    className="form-control validate"
                    style={{"paddingTop":"13px","fontWeight":"bold"}}
                  >Lorem Ipsum</text>
                </div>
            <a
              href="/reset"
              className="btn btn-primary btn-block text-uppercase mb-3">Update Profile</a>
            <button className="btn btn-primary btn-block text-uppercase">
              Top Up Your Wallet
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-products" style={{"backgroundColor": "white"}}>
            <h2 className="tm-block-title" style={{"color":"rgb(54, 39, 17)"}}>Customer Order History</h2>
            <div className="tm-product-table-container">
              <table className="table table-hover tm-table-small tm-product-table">
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">NAME</th>
                    <th scope="col">AGE</th>
                    <th scope="col">CUSTOMER ID</th>
                    <th scope="col">CONTACT NUMBER</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 1</td>
                    <td>200</td>
                    <td>1,450</td>
                    <td>28 March 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 2</td>
                    <td>200</td>
                    <td>1,250</td>
                    <td>21 March 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 3</td>
                    <td>200</td>
                    <td>1,100</td>
                    <td>18 Feb 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 4</td>
                    <td>200</td>
                    <td>1,400</td>
                    <td>24 Feb 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 5</td>
                    <td>200</td>
                    <td>1,800</td>
                    <td>22 Feb 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 6</td>
                    <td>200</td>
                    <td>1,000</td>
                    <td>20 Feb 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 7</td>
                    <td>200</td>
                    <td>500</td>
                    <td>10 Feb 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 8</td>
                    <td>200</td>
                    <td>1,000</td>
                    <td>08 Feb 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 9</td>
                    <td>200</td>
                    <td>1,200</td>
                    <td>24 Jan 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 10</td>
                    <td>200</td>
                    <td>1,600</td>
                    <td>22 Jan 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">Lorem Ipsum Product 11</td>
                    <td>200</td>
                    <td>2,000</td>
                    <td>21 Jan 2019</td>
                    <td>
                      <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>

    </>
  );
}
