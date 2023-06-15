import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import adminContext from "../../context/admin/AdminContext";
import productContext from "../../context/product/ProductContext";
import NavbarAdmin from "../Admin/NavbarAdmin";

export default function Product() {
  let navigate = useNavigate();
  var adminContextResponse = useContext(adminContext);
  var productContextResponse = useContext(productContext);
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [products, setProducts] = useState([]);
  const [reloadOnDelete, setReloadOnDelete] = useState(false);

  const getAllProducts = async () => {
    var response = await fetch(`${REACT_APP_APIURL}/manager/getAllProducts`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setProducts(response);
    setReloadOnDelete(true);
  };

  const handleDeleteProduct = async (product) => {
    await fetch(`${REACT_APP_APIURL}/manager/deleteProduct`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    window.alert("Product deleted successfully!!");
    setReloadOnDelete(false);
  };

  useEffect(() => {
    getAllProducts();
    adminContextResponse.getAdminID({
      adminToken: localStorage.getItem("adminToken"),
    });
    if (!adminContextResponse.validSession) {
      navigate("/admin_log", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminContextResponse.validSession, reloadOnDelete]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
      />
      <div style={{ height: "100vh" }}>
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
              <div
                className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col"
                style={{ marginTop: "-3vh" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "2vh",
                    marginTop: "-2vh",
                  }}
                >
                  <h2
                    className=""
                    style={{
                      fontSize: "2rem",
                      textAlign: "center",
                      paddingRight: "15vw",
                      paddingTop: "1.4vh",
                    }}
                  >
                    Products in Stock
                  </h2>
                </div>
                <div
                  className="tm-bg-primary-dark tm-block tm-block-taller"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "-14.5vw",
                    maxHeight: "fit-content",
                    marginBottom: "-12vh",
                  }}
                >
                  <div
                    className="tm-product-table-container"
                    style={{ overflowY: "auto" }}
                  >
                    <table
                      className="table table-hover tm-table-small tm-product-table"
                      style={{
                        textAlign: "center",
                      }}
                    >
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
                          <th scope="col">DELETE ITEM</th>
                          <th scope="col">UPDATE ITEM</th>
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
                              <i
                                className="far fa-trash-alt tm-product-delete-icon tm-product-delete-link"
                                style={{
                                  backgroundColor: "#d90000",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  handleDeleteProduct(element);
                                }}
                              ></i>
                            </td>
                            <td>
                              <button
                                style={{
                                  backgroundColor: "inherit",
                                }}
                                onClick={() => {
                                  productContextResponse.setProduct(element);
                                  localStorage.setItem(
                                    "updateProduct",
                                    JSON.stringify(element)
                                  );
                                }}
                              >
                                <Link to="/update_prod">
                                  <i
                                    className="fa-solid fa-pencil fa-xl"
                                    style={{
                                      color: "#0f62f0",
                                    }}
                                  ></i>
                                </Link>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Link
                        to="/add_prod"
                        className="btn btn-primary btn-block text-uppercase mb-3"
                        style={{ width: "100%" }}
                      >
                        Add new product
                      </Link>
                    </div>
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
