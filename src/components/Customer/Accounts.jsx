import "../../css/bootstrap.min.css";
import "../../css/bootstrap-grid.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import customerContext from "../../context/customer/CustomerContext";
import { useNavigate } from "react-router";

export default function Accounts() {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  let navigate = useNavigate();

  const userLogin = localStorage.getItem("token");
  if (!userLogin) {
    navigate("/login", { replace: true });
  }

  var customerContextResponse = useContext(customerContext);

  const [credentials, setCredentials] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const checkValidUpdate = () => {
    if (credentials.name.length < 3) {
      window.alert("Please Enter a Valid Name");
      return false;
    } else if (credentials.address.length < 5) {
      window.alert("Please Enter a valid Address");
      return false;
    } else if (credentials.phone.length !== 10) {
      window.alert("Please Enter a valid Phone Number");
      return false;
    }
    return true;
  };

  const handleUpdateAccount = async (event) => {
    event.preventDefault();
    if (checkValidUpdate()) {
      await fetch(`${REACT_APP_APIURL}/customer/update`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: customerContextResponse.customer.id,
          email: customerContextResponse.customer.email,
          credit: customerContextResponse.customer.credit,
          name: credentials.name,
          address: credentials.address,
          mobileNumber: credentials.phone,
        }),
      });
      window.alert("Customer Deatils Updated Successfully !");
    }
  };

  const handleDeleteAccount = async (event) => {
    event.preventDefault();
    await fetch(`${REACT_APP_APIURL}/customer/deleteOne`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: customerContextResponse.customer.email,
      }),
    });
    window.alert("Account Deleted Successfully !");
    localStorage.setItem("token", "");
    localStorage.setItem("cart", []);
    navigate("/login", { replace: true });
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    customerContextResponse.getCustomerID({
      authToken: localStorage.getItem("token"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            style={{ marginTop: "5vh" }}
          >
            <div
              className="tm-bg-primary-dark tm-block tm-block-settings"
              style={{ padding: "20px" }}
            >
              <h2
                className="tm-block-title"
                style={{
                  color: "black",
                  fontSize: "1.7rem",
                  marginLeft: "16vw",
                }}
              >
                Update Profile
              </h2>
              <form
                action=""
                className="tm-signup-form row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="form-group col-lg-6">
                  <label htmlFor="name" style={{ color: "black" }}>
                    Name
                  </label>
                  <input
                    placeholder={customerContextResponse.customer.name}
                    required
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    value={credentials.name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="name" style={{ color: "black" }}>
                    {" "}
                    Address
                  </label>
                  <textarea
                    placeholder={customerContextResponse.customer.address}
                    required
                    id="address"
                    name="address"
                    type="text"
                    className="form-control validate"
                    value={credentials.address}
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="phone" style={{ color: "black" }}>
                    Phone
                  </label>
                  <input
                    placeholder={customerContextResponse.customer.mobileNumber}
                    required
                    id="phone"
                    name="phone"
                    type="number"
                    className="form-control validate"
                    maxLength={10}
                    minLength={10}
                    value={credentials.phone}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{
                      color: "black",
                      width: "fit-content",
                      marginLeft: "2vw",
                    }}
                    onClick={handleUpdateAccount}
                  >
                    Update Your Account
                  </button>
                </div>
                <div className="form-group col-lg-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    style={{
                      color: "black",
                      width: "fit-content",
                      background: "red",
                      marginLeft: "2vw",
                    }}
                    onClick={handleDeleteAccount}
                  >
                    Delete Your Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="tm-footer row tm-mt-small"
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            BBB SuperMart All Rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}