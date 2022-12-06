import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
export default function Product() {
  // $(function() {
  //     $(".tm-product-name").on("click", function() {
  //       window.location.href = "edit-product.html";
  //     });
  //   });
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
      />
      <div className="container">
        <nav
          className="navbar navbar-expand-xl navbar-dark"
          style={{ backgroundColor: "#0e511e" }}
        >
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
      <div
        className="d-flex"
        style={{
          backgroundImage: "url('./img/bg.jpeg')",
          backgroundSize: "70% 100%",
        }}
      >
        <div className="container mt-5">
          <div className="row tm-content-row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
              <div
                className="tm-bg-primary-dark tm-block tm-block-products"
                style={{ backgroundColor: "white" }}
              >
                <div className="tm-product-table-container">
                  <table className="table table-hover tm-table-small tm-product-table">
                    <thead>
                      <tr>
                        <th scope="col">&nbsp;</th>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">UNITS SOLD</th>
                        <th scope="col">IN STOCK</th>
                        <th scope="col">EXPIRY DATE</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 1
                        </td>
                        <td>200</td>
                        <td>1,450</td>
                        <td>550</td>
                        <td>28 March 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 2
                        </td>
                        <td>200</td>
                        <td>1,250</td>
                        <td>750</td>
                        <td>21 March 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 3
                        </td>
                        <td>200</td>
                        <td>1,100</td>
                        <td>900</td>
                        <td>18 Feb 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 4
                        </td>
                        <td>200</td>
                        <td>1,400</td>
                        <td>600</td>
                        <td>24 Feb 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 5
                        </td>
                        <td>200</td>
                        <td>1,800</td>
                        <td>200</td>
                        <td>22 Feb 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 6
                        </td>
                        <td>200</td>
                        <td>1,000</td>
                        <td>1,000</td>
                        <td>20 Feb 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 7
                        </td>
                        <td>200</td>
                        <td>500</td>
                        <td>100</td>
                        <td>10 Feb 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 8
                        </td>
                        <td>200</td>
                        <td>1,000</td>
                        <td>600</td>
                        <td>08 Feb 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 9
                        </td>
                        <td>200</td>
                        <td>1,200</td>
                        <td>800</td>
                        <td>24 Jan 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 10
                        </td>
                        <td>200</td>
                        <td>1,600</td>
                        <td>400</td>
                        <td>22 Jan 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">
                          Lorem Ipsum Product 11
                        </td>
                        <td>200</td>
                        <td>2,000</td>
                        <td>400</td>
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
                <Link to="/add_prod"><a
                  className="btn btn-primary btn-block text-uppercase mb-3"
                >
                  Add new product
                </a></Link>
                <button className="btn btn-primary btn-block text-uppercase">
                  Delete selected products
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
              <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
                <h2
                  className="tm-block-title"
                  style={{ color: "rgb(54, 39, 17)" }}
                >
                  Product Categories
                </h2>
                <div className="tm-product-table-container">
                  <table className="table tm-table-small tm-product-tabler">
                    <tbody>
                      <tr>
                        <td className="tm-product-name">Fresh Meats</td>
                        <td className="text-center">
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="tm-product-name">Dairy Products</td>
                        <td className="text-center">
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="tm-product-name">Vegetables</td>
                        <td className="text-center">
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="tm-product-name">Fresh Fruits</td>
                        <td className="text-center">
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="tm-product-name">Toiletries</td>
                        <td className="text-center">
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="tm-product-name">Healthcare</td>
                        <td className="text-center">
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="category">Add Category</label>
                  <input
                    style={{
                      backgroundColor: "rgb(244, 243, 243)",
                      color: "black",
                      textAlign: "center",
                    }}
                    id="category"
                    name="category"
                    placeholder="New Category"
                    type="text"
                    className="form-control validate"
                    required
                  />
                </div>
                <div>
                  <button className="btn btn-primary btn-block text-uppercase mb-3">
                    Add New Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
    </>
  );
}
