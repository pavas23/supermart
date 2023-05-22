import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { useNavigate } from "react-router";

import { useEffect, useState } from "react";
import NavbarAdmin from "../Admin/NavbarAdmin";
export default function AddProd() {
  const adminLogin = localStorage.getItem("adminToken");
  let navigate = useNavigate();

  useEffect(() => {
    if (!adminLogin) {
      navigate("/admin_log", { replace: true });
    }
  });
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    const product = { name, price, quantity };
    console.log(product);
    fetch("http://localhost:9001/manager/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      console.log("Product Added");
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
                  backgroundColor: "#2e613a",
                  opacity: "0.94",
                  "margin-left": "12vh",
                }}
              >
                <div className="row">
                  <div className="col-12">
                    <h2 className="tm-block-title d-inline-block">
                      Add Product
                    </h2>
                  </div>
                </div>
                <div className="row tm-edit-product-row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <form action="" className="tm-edit-product-form">
                      <div className="form-group mb-3">
                        <label htmlFor="name" style={{ "margin-left": "22vh" }}>
                          Product Name
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
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          value={name}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="price"
                          style={{ "margin-left": "22vh" }}
                        >
                          Price
                        </label>

                        <input
                          style={{
                            backgroundColor: "rgb(244, 243, 243)",
                            color: "black",
                            "margin-left": "22vh",
                          }}
                          id="price"
                          name="price"
                          type="number"
                          className="form-control validate"
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                          value={price}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="category"
                          style={{ "margin-left": "22vh" }}
                        >
                          Image URL
                        </label>

                        <input
                          style={{
                            backgroundColor: "rgb(244, 243, 243)",
                            color: "black",
                            "margin-left": "22vh",
                          }}
                          id="expire_date"
                          name="expire_date"
                          type="text"
                          className="form-control validate"
                          data-large-mode="true"
                        />
                      </div>
                      <div className="row">
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="expire_date"
                            style={{ "margin-left": "22vh" }}
                          >
                            Expiry Date
                          </label>
                          <input
                            style={{
                              backgroundColor: "rgb(244, 243, 243)",
                              color: "black",
                              "margin-left": "22vh",
                            }}
                            id="expire_date"
                            name="expire_date"
                            type="text"
                            className="form-control validate"
                            data-large-mode="true"
                          />
                        </div>
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="stock"
                            style={{ "margin-left": "22vh" }}
                          >
                            Quantity
                          </label>
                          <input
                            style={{
                              backgroundColor: "rgb(244, 243, 243)",
                              color: "black",
                              "margin-left": "22vh",
                            }}
                            id="stock"
                            name="stock"
                            type="number"
                            className="form-control validate"
                            onChange={(e) => {
                              setQuantity(e.target.value);
                            }}
                            value={quantity}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase"
                          style={{ "margin-left": "22vh" }}
                          onClick={(e) => {
                            handleClick(e);
                          }}
                        >
                          Add Product Now
                        </button>
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
