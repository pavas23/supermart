import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import NavbarAdmin from "../Admin/NavbarAdmin";

export default function Product() {
  const adminLogin = localStorage.getItem("adminToken");
  let navigate = useNavigate();

  if (!adminLogin) {
    navigate("/admin_log", { replace: true });
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9001/manager/getAllProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
      />
      <div className="container">
        <NavbarAdmin />
      </div>
      <div
        className="d-flex"
        style={{
          backgroundImage: "url('./img/bg.jpeg')",
          backgroundSize: "70% 100%",
        }}
      >
        <div className="" style={{ marginTop: "9rem" }}>
          <div
            className="row tm-content-row"
            style={{ justifyContent: "space-around", width: "275%" }}
          >
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Products in Stock</h2>
              </div>
              <div
                className="tm-bg-primary-dark tm-block tm-block-products"
                style={{ backgroundColor: "white" }}
              >
                <div
                  className="tm-product-table-container"
                  style={{ overflowY: "auto" }}
                >
                  <table className="table table-hover tm-table-small tm-product-table">
                    <thead
                      style={{
                        backgroundColor: "rgb(189 224 255)",
                        color: "blue",
                      }}
                    >
                      <tr>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">UNITS SOLD</th>
                        <th scope="col">IN STOCK</th>
                        <th scope="col">EXPIRY DATE</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((element) => (
                        <tr
                          style={{
                            fontSize: "17px",
                            color: "black",
                            backgroundColor: "aliceblue",
                          }}
                        >
                          <td className="tm-product-name">{element.name}</td>
                          <td>{element.price}</td>
                          <td>{element.units_sold}</td>
                          <td>{element.quantity}</td>
                          <td>pls add</td>
                          <td>
                            <a
                              href="#"
                              className="tm-product-delete-link"
                              onClick={() => {
                                fetch(
                                  "http://localhost:8080/manager/deleteProduct",
                                  {
                                    method: "DELETE",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(element),
                                  }
                                ).then(() => {
                                  console.log("Prodcut Deleted");
                                });
                              }}
                              style={{ backgroundColor: "#d90000" }}
                            >
                              <i className="far fa-trash-alt tm-product-delete-icon"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                  }}
                >
                  <Link to="/add_prod">
                    <a
                      className="btn btn-primary btn-block text-uppercase mb-3"
                      //style={{backgroundColor : '#5783db',borderColo :'5783db'}}
                    >
                      Add new product
                    </a>
                  </Link>
                  <Link to="/add_prod">
                    <a className="btn btn-primary btn-block text-uppercase mb-3">
                      Update Product
                    </a>
                  </Link>
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
