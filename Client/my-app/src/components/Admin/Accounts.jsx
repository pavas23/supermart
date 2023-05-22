import "../../css/bootstrap.min.css";
import "../../css/bootstrap-grid.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Customer/Navbar";

export default function Accounts() {
  const id = 8;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  setEmail(email);
  const customer = { id, name, address, phone, email };

  async function getHistory() {
    var response = await fetch("http://localhost:9001/customer/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    });
    console.log(customer);
    console.log(response);
  }

  return (
    <>
      <Navbar />
      <div className="" id="home">
        <div
          className="container mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row tm-content-row">
            <div className="col-12 tm-block-col"></div>
          </div>

          <div
            className="tm-block-col tm-col-account-settings"
            style={{ marginTop: "20vh" }}
          >
            <div className="tm-bg-primary-dark tm-block tm-block-settings">
              <h2 className="tm-block-title" style={{ color: "black" }}>
                Update Profile
              </h2>
              <form action="" className="tm-signup-form row">
                <div className="form-group col-lg-6">
                  <label htmlFor="name" style={{ color: "black" }}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="name" style={{ color: "black" }}>
                    {" "}
                    Address
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="phone" style={{ color: "black" }}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div
                  className="form-group col-lg-6"
                  style={{ display: "block", marginLeft: "24vh" }}
                >
                  <label className="tm-hide-sm">&nbsp;</label>
                  <Link
                    to="/reset"
                    style={{ display: "block", marginRight: "3vw" }}
                  >
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                      style={{ color: "black" }}
                    >
                      Reset Password
                    </button>
                  </Link>
                </div>

                <div className="form-group col-lg-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{
                      color: "black",
                      width: "fit-content",
                      "margin-left": "24vh",
                    }}
                    onClick={(e) => {
                      getHistory();
                    }}
                  >
                    Update Your Account
                  </button>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{
                      color: "black",
                      width: "fit-content",
                      "margin-left": "24vh",
                      background: "red",
                    }}
                    onClick={() => {
                      fetch("http://localhost:9001/admin/deleteCustomer", {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(customer),
                      }).then(() => {
                        console.log("Customer Deleted");
                      });
                    }}
                  >
                    Delete your Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="tm-footer row tm-mt-small">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            BBB SuperMart All Rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
