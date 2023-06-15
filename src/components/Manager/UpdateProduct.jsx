import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NavbarAdmin from "../Admin/NavbarAdmin";
import { useContext } from "react";
import adminContext from "../../context/admin/AdminContext";

export default function UpdateProduct() {
  let navigate = useNavigate();
  var adminContextResponse = useContext(adminContext);
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    src: "",
    id: "",
  });

  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    await fetch(`${REACT_APP_APIURL}/manager/updateProduct`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    window.alert("Product updated successfully!!");
    navigate("/products", { replace: true });
  };

  const setDetails = () => {
    setProduct(JSON.parse(localStorage.getItem("updateProduct")));
  };

  useEffect(() => {
    setDetails();
    adminContextResponse.getAdminID({
      adminToken: localStorage.getItem("adminToken"),
    });
    if (!adminContextResponse.validSession) {
      navigate("/admin_log", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminContextResponse.validSession]);

  const onChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
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
                      Update Product
                    </h2>
                  </div>
                </div>
                <div className="row tm-edit-product-row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <form
                      method="POST"
                      onSubmit={handleUpdateProduct}
                      autoComplete="off"
                      id="login-form"
                      className="tm-edit-product-form"
                    >
                      <div className="form-group mb-3">
                        <label
                          htmlFor="name"
                          style={{ "margin-left": "22vh", color: "black" }}
                        >
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
                          placeholder={product.name}
                          className="form-control validate"
                          onChange={onChange}
                          value={product.name}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="price"
                          style={{ "margin-left": "22vh", color: "black" }}
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
                          placeholder={product.price}
                          min={1}
                          onChange={onChange}
                          value={product.price}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="category"
                          style={{ "margin-left": "22vh", color: "black" }}
                        >
                          Image URL
                        </label>

                        <input
                          style={{
                            backgroundColor: "rgb(244, 243, 243)",
                            color: "black",
                            "margin-left": "22vh",
                          }}
                          id="src"
                          name="src"
                          type="text"
                          className="form-control validate"
                          data-large-mode="true"
                          placeholder={product.src}
                          onChange={onChange}
                          value={product.src}
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="expire_date"
                            style={{ "margin-left": "22vh", color: "black" }}
                          >
                            Expiry
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
                            style={{ "margin-left": "22vh", color: "black" }}
                          >
                            Quantity
                          </label>
                          <input
                            style={{
                              backgroundColor: "rgb(244, 243, 243)",
                              color: "black",
                              "margin-left": "22vh",
                            }}
                            id="quantity"
                            name="quantity"
                            type="number"
                            min={1}
                            placeholder={product.quantity}
                            className="form-control validate"
                            onChange={onChange}
                            value={product.quantity}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase"
                          style={{ "margin-left": "22vh" }}
                          value="Update Product"
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
