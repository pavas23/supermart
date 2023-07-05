import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NavbarAdmin from "../Admin/NavbarAdmin";
import { useContext } from "react";
import adminContext from "../../context/admin/AdminContext";

export default function AddManager() {
  let navigate = useNavigate();
  var adminContextResponse = useContext(adminContext);
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [manager, setManager] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    mobileNumber: "",
    salary: 1000,
  });

  useEffect(() => {
    adminContextResponse.getAdminID({
      adminToken: localStorage.getItem("adminToken"),
    });
    if (!adminContextResponse.validSession) {
      navigate("/admin_log", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminContextResponse.validSession]);

  const onChange = (event) => {
    setManager({
      ...manager,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${REACT_APP_APIURL}/admin/addManager`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(manager),
    });
    if (response) {
      window.alert("Manager Added Successfully !!");
    } else {
      window.alert("Manager Not Added !!");
    }
    setManager({
      name: "",
      email: "",
      password: "",
      address: "",
      salary: 0,
      mobileNumber: "",
    });
  };

  return (
    <>
      <div clas="container">
        <NavbarAdmin />
      </div>
      <div
        className="d-flex"
        style={{
          backgroundImage: "url('./img/bg.jpeg')",
          backgroundSize: "60% 100%",
        }}
      >
        <div className="container tm-mt-small tm-mb-big">
          <div className="row">
            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
              <div
                className="tm-bg-primary-light tm-block tm-block-h-auto"
                style={{
                  backgroundColor: "rgb(189 224 255)",
                  opacity: "0.94",
                  "margin-left": "8vh",
                  "margin-top": "15vh",
                }}
              >
                <div className="row" style={{ textAlign: "center" }}>
                  <div className="col-12">
                    <h2
                      className="tm-block-title d-inline-block"
                      style={{ color: "black" }}
                    >
                      Add Manager
                    </h2>
                  </div>
                </div>
                <div className="row tm-edit-product-row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <form
                      method="POST"
                      onSubmit={handleSubmit}
                      autoComplete="off"
                      id="login-form"
                      className="tm-edit-product-form"
                    >
                      <div className="form-group mb-3">
                        <label
                          htmlFor="name"
                          style={{ "margin-left": "22vh", color: "black" }}
                        >
                          Manager Name
                        </label>
                        <input
                          style={{
                            backgroundColor: "rgb(244, 243, 243)",
                            color: "black",
                            "margin-left": "22vh",
                          }}
                          id="name"
                          name="name"
                          type="text"
                          className="form-control validate"
                          onChange={onChange}
                          value={manager.name}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="price"
                          style={{ "margin-left": "22vh", color: "black" }}
                        >
                          Email
                        </label>

                        <input
                          style={{
                            backgroundColor: "rgb(244, 243, 243)",
                            color: "black",
                            "margin-left": "22vh",
                          }}
                          id="manager-email"
                          name="email"
                          type="email"
                          className="form-control validate"
                          onChange={onChange}
                          value={manager.email}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="category"
                          style={{ "margin-left": "22vh", color: "black" }}
                        >
                          Password
                        </label>

                        <input
                          style={{
                            backgroundColor: "rgb(244, 243, 243)",
                            color: "black",
                            "margin-left": "22vh",
                          }}
                          id="src"
                          name="password"
                          type="password"
                          className="form-control validate"
                          data-large-mode="true"
                          onChange={onChange}
                          value={manager.password}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="category"
                          style={{ "margin-left": "22vh", color: "black" }}
                        >
                          Contact Number
                        </label>

                        <input
                          style={{
                            backgroundColor: "rgb(244, 243, 243)",
                            color: "black",
                            "margin-left": "22vh",
                          }}
                          id="mobileNumber"
                          name="mobileNumber"
                          type="text"
                          className="form-control validate"
                          data-large-mode="true"
                          onChange={onChange}
                          value={manager.mobileNumber}
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="expire_date"
                            style={{ "margin-left": "22vh", color: "black" }}
                          >
                            Salary
                          </label>
                          <input
                            style={{
                              backgroundColor: "rgb(244, 243, 243)",
                              color: "black",
                              "margin-left": "22vh",
                            }}
                            id="salary"
                            name="salary"
                            type="number"
                            min={100}
                            className="form-control validate"
                            data-large-mode="true"
                            onChange={onChange}
                            value={manager.salary}
                            required
                          />
                        </div>
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="stock"
                            style={{ "margin-left": "22vh", color: "black" }}
                          >
                            Address
                          </label>
                          <input
                            style={{
                              backgroundColor: "rgb(244, 243, 243)",
                              color: "black",
                              "margin-left": "22vh",
                            }}
                            id="address"
                            name="address"
                            type="text"
                            className="form-control validate"
                            onChange={onChange}
                            value={manager.address}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase"
                          style={{ "margin-left": "22vh" }}
                          value="Add Manager"
                        />
                      </div>
                    </form>
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
