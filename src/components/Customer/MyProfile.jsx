import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { useEffect } from "react";
import Navbar from "./Navbar";
import customerContext from "../../context/customer/CustomerContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function MyProfile() {
  const userLogin = localStorage.getItem("token");
  let navigate = useNavigate();
  if (!userLogin) {
    navigate("/login", { replace: true });
  }
  var customerContextResponse = useContext(customerContext);

  useEffect(() => {
    customerContextResponse.getCustomerID({
      authToken: localStorage.getItem("token"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div
        className="d-flex"
        style={{
          backgroundImage: "url('./img/bg.jpeg')",
          backgroundSize: "70% 100%",
          marginTop: "12vh",
        }}
      >
        <div className="container mt-5">
          <div className="row tm-content-row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
              <div
                className="tm-bg-primary-dark tm-block tm-block-products"
                style={{ backgroundColor: "white" }}
              >
                <h2
                  className="tm-block-title"
                  style={{ color: "rgb(54, 39, 17)" }}
                >
                  My Profile
                </h2>
                <div className="form-group col-lg-8">
                  <label
                    htmlFor="name"
                    style={{ color: "rgb(54, 39, 17)", fontWeight: "bold" }}
                  >
                    Name:
                  </label>
                  <text
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    value="hello"
                    style={{
                      paddingTop: "13px",
                      fontWeight: "bold",
                      width: "130%",
                    }}
                  >
                    {customerContextResponse.customer.name}
                  </text>
                </div>
                <div className="form-group col-lg-8">
                  <label
                    htmlFor="name"
                    style={{ color: "rgb(54, 39, 17)", fontWeight: "bold" }}
                  >
                    Address:
                  </label>
                  <text
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    style={{
                      paddingTop: "13px",
                      fontWeight: "bold",
                      width: "130%",
                    }}
                  >
                    {customerContextResponse.customer.address}
                  </text>
                </div>
                <div className="form-group col-lg-8">
                  <label
                    htmlFor="phone"
                    style={{ color: "rgb(54, 39, 17)", fontWeight: "bold" }}
                  >
                    Contact Number:
                  </label>
                  <text
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                    style={{
                      paddingTop: "13px",
                      fontWeight: "bold",
                      width: "130%",
                    }}
                  >
                    {customerContextResponse.customer.mobileNumber}
                  </text>
                </div>
                <div className="form-group col-lg-8">
                  <label
                    htmlFor="email"
                    style={{ color: "rgb(54, 39, 17)", fontWeight: "bold" }}
                  >
                    Email Address:
                  </label>
                  <text
                    id="email"
                    name="email"
                    type="email"
                    className="form-control validate"
                    width="110%"
                    style={{
                      paddingTop: "13px",
                      fontWeight: "bold",
                      width: "130%",
                    }}
                    value={customerContextResponse.customer.email}
                  >
                    {customerContextResponse.customer.email}
                  </text>
                </div>
                <div className="form-group col-lg-8">
                  <label
                    htmlFor="text"
                    style={{ color: "rgb(54, 39, 17)", fontWeight: "bold" }}
                  >
                    Wallet Balance:
                  </label>
                  <text
                    id="password"
                    name="password"
                    type="text"
                    className="form-control validate"
                    style={{
                      paddingTop: "13px",
                      fontWeight: "bold",
                      width: "130%",
                    }}
                  >
                    {customerContextResponse.customer.credit}
                  </text>
                </div>
                <Link
                  to="/accounts"
                  className="btn btn-primary btn-block text-uppercase mb-3"
                >
                  Update Profile
                </Link>
                <Link
                  to="/wallet"
                  className="btn btn-primary btn-block text-uppercase"
                >
                  Top Up Your Wallet
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
              <div
                className="tm-bg-primary-dark tm-block tm-block-products"
                style={{ backgroundColor: "white" }}
              >
                <h2
                  className="tm-block-title"
                  style={{ color: "rgb(54, 39, 17)" }}
                >
                  Customer Order History
                </h2>
                <div className="tm-product-table-container">
                  <table className="table table-hover tm-table-small tm-product-table">
                    <thead>
                      <tr>
                        <th scope="col">Date of Order</th>
                        <th scope="col">Address</th>
                        <th scope="col">Expected Date</th>
                        <th scope="col">Total Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerContextResponse.history.map((element) => (
                        <tr>
                          <th scope="row" style={{ fontSize: "medium" }}>
                            {element.date}
                          </th>
                          <td
                            className="tm-product-name"
                            style={{ fontSize: "medium" }}
                          >
                            {element.address}
                          </td>
                          <td style={{ fontSize: "medium" }}>
                            {element.expected_date}
                          </td>
                          <td style={{ fontSize: "medium" }}>
                            &#8377;{element.totalCost}
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
