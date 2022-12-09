import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
export default function MyProfile() {

  const [history, setHistory] = useState([]);
  const [cust, setCustomer] = useState({});
  var response = [];
  var customerResponse;

  useEffect(() => {
    getHistory();
    getCustomer();
  }, []);
  const customer = {id:parseInt(localStorage.getItem("token"))};
  async function getHistory() {
    response = await fetch('http://localhost:9001/customer/history', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),

    });
    response = await response.json();
    console.log(response);
    setHistory(response);


  }
  async function getCustomer() {
    customerResponse = await fetch('http://localhost:9001/customer/getCustomer', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),

    });
    customerResponse = await customerResponse.json();
    console.log(customerResponse);
    setCustomer(customerResponse);

  }

  return (

    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="d-flex" style={{ "backgroundImage": "url('./img/bg.jpeg')", "backgroundSize": "70% 100%",marginTop:"12vh"}}>
        <div className="container mt-5" >
          <div className="row tm-content-row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
              <div className="tm-bg-primary-dark tm-block tm-block-products" style={{ "backgroundColor": "white" }}>
                <h2 className="tm-block-title" style={{ "color": "rgb(54, 39, 17)" }}>My Profile</h2>
                <div className="form-group col-lg-8">
                  <label for="name" style={{ "color": "rgb(54, 39, 17)", "fontWeight": "bold" }}>Name:</label>
                  <text
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    value="hello"
                    style={{ "paddingTop": "13px", "fontWeight": "bold" }}
                  >{cust.name}</text>
                </div>
                <div className="form-group col-lg-8">
                  <label for="name" style={{ "color": "rgb(54, 39, 17)", "fontWeight": "bold" }}>Address:</label>
                  <text
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    style={{ "paddingTop": "13px", "fontWeight": "bold" }}
                  >{cust.address}</text>
                </div>
                <div className="form-group col-lg-8">
                  <label for="phone" style={{ "color": "rgb(54, 39, 17)", "fontWeight": "bold" }}>Contact Number:</label>
                  <text
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                    style={{ "paddingTop": "13px", "fontWeight": "bold" }}
                  >{cust.mobileNumber}</text>
                </div>
                <div className="form-group col-lg-8">
                  <label for="email" style={{ "color": "rgb(54, 39, 17)", "fontWeight": "bold" }}>Email Address:</label>
                  <text
                    id="email"
                    name="email"
                    type="email"
                    className="form-control validate"
                    style={{ "paddingTop": "13px", "fontWeight": "bold" }}
                  >{cust.email}</text>
                </div>
                <div className="form-group col-lg-8">
                  <label for="text" style={{ "color": "rgb(54, 39, 17)", "fontWeight": "bold" }}>Wallet Balance:</label>
                  <text
                    id="password"
                    name="password"
                    type="text"
                    className="form-control validate"
                    style={{ "paddingTop": "13px", "fontWeight": "bold" }}
                  >{cust.credit}</text>
                </div>
                <a
                  href="/accounts"
                  className="btn btn-primary btn-block text-uppercase mb-3">Update Profile</a>
                <button className="btn btn-primary btn-block text-uppercase">
                  Top Up Your Wallet
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
              <div className="tm-bg-primary-dark tm-block tm-block-products" style={{ "backgroundColor": "white" }}>
                <h2 className="tm-block-title" style={{ "color": "rgb(54, 39, 17)" }}>Customer Order History</h2>
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
                      {
                        history.map((element) => (
                          <tr>
                            <th scope="row" style={{ fontSize: "medium" }}>{element.date}</th>
                            <td className="tm-product-name" style={{ fontSize: "medium" }}>{element.address}</td>
                            <td style={{ fontSize: "medium" }}>{element.expected_date}</td>
                            <td style={{ fontSize: "medium" }}>&#8377;{element.totalCost}</td>

                          </tr>
                        ))
                      }
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
