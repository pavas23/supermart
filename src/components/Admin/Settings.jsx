/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import { useContext } from "react";
import adminContext from "../../context/admin/AdminContext";

export default function Settings() {
  let navigate = useNavigate();
  var adminContextResponse = useContext(adminContext);
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [managers, setManagers] = useState([]);
  const [customers, setCustomers] = useState([]);

  const getAllCustomers = async () => {
    var response = await fetch(`${REACT_APP_APIURL}/admin/allCustomers`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setCustomers(response);
  };

  const getAllManagers = async () => {
    var response = await fetch(`${REACT_APP_APIURL}/admin/allManagers`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setManagers(response);
  };

  const deleteCustomer = async (customer) => {
    await fetch(`${REACT_APP_APIURL}/admin/deleteCustomer`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    window.alert("Customer has been deleted !!");
    getAllCustomers();
  };

  useEffect(() => {
    getAllCustomers();
    getAllManagers();
    adminContextResponse.getAdminID({
      adminToken: localStorage.getItem("adminToken"),
    });
    if (!adminContextResponse.validSession) {
      navigate("/admin_log", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminContextResponse.validSession]);

  return (
    <>
      <div className="container">
        <NavbarAdmin />
      </div>
      <div
        className=""
        style={{
          backgroundSize: "70% 100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "7rem",
        }}
      >
        <div
          className=""
          style={{ marginTop: "7rem !important", width: "100%" }}
        >
          <div className="row tm-content-row" style={{ flexWrap: "nowrap" }}>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
              <div
                className="tm-bg-primary-dark tm-block tm-block-products"
                style={{ backgroundColor: "white", marginLeft: "1rem" }}
              >
                <h2
                  className="tm-block-title"
                  style={{ color: "rgb(54, 39, 17)" }}
                >
                  Managers
                </h2>
                <div className="tm-product-table-container">
                  <table className="table table-hover tm-table-small tm-product-table">
                    <thead
                      style={{
                        backgroundColor: "rgb(189, 224, 255)",
                        color: "blue",
                      }}
                    >
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">SALARY</th>
                        <th scope="col">CONTACT NUMBER</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        fontSize: "17px",
                        color: "black",
                        backgroundColor: "aliceblue",
                      }}
                    >
                      {managers.map((element) => (
                        <tr>
                          <td className="tm-product-name">{element.id}</td>
                          <td>{element.name}</td>
                          <td>{element.salary}</td>
                          <td>{element.mobileNumber}</td>
                          <td>{element.email}</td>
                          <td>
                            <a
                              href="#"
                              className="tm-product-delete-link"
                              style={{ backgroundColor: "rgb(217, 0, 0)" }}
                            >
                              <i className="far fa-trash-alt tm-product-delete-icon"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <a
                  href="add-manager.html"
                  className="btn btn-primary btn-block text-uppercase mb-3"
                >
                  Add New Manager
                </a>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col"
              style={{ marginRight: "1rem" }}
            >
              <div
                className="tm-bg-primary-dark tm-block tm-block-products"
                style={{ backgroundColor: "white", marginRight: "1rem" }}
              >
                <h2
                  className="tm-block-title"
                  style={{ color: "rgb(54, 39, 17)" }}
                >
                  Customers
                </h2>
                <div className="tm-product-table-container">
                  <table className="table table-hover tm-table-small tm-product-table">
                    <thead
                      style={{
                        backgroundColor: "rgb(189, 224, 255)",
                        color: "blue",
                      }}
                    >
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">WALLET BALANCE</th>
                        <th scope="col">MOBILE NUMBER</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        fontSize: "17px",
                        color: "black",
                        backgroundColor: "aliceblue",
                      }}
                    >
                      {customers.map((element) => (
                        <tr>
                          <td className="tm-product-name">{element.id}</td>
                          <td>{element.name}</td>
                          <td>{element.credit}</td>
                          <td>{element.mobileNumber}</td>
                          <td>{element.email}</td>
                          <td>
                            <i
                              className="far fa-trash-alt tm-product-delete-icon tm-product-delete-link"
                              onClick={() => deleteCustomer(element)}
                              style={{
                                backgroundColor: "#d90000",
                                cursor: "pointer",
                              }}
                            ></i>
                          </td>
                        </tr>
                      ))}
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
