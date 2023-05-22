/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";

export default function Settings() {
  const adminLogin = localStorage.getItem("adminToken");
  let navigate = useNavigate();
  const [managers, setManagers] = useState([]);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    if (!adminLogin) {
      navigate("/admin_log", { replace: true });
    } else {
      fetch("http://localhost:9001/admin/allManagers")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setManagers(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      fetch("http://localhost:9001/admin/allCustomers")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCustomers(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

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
                        <th scope="col">E-mail</th>
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
                        <th scope="col">Name</th>
                        <th scope="col">Wallet Balance</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">E-mail</th>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
