import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import NavbarAdmin from "./NavbarAdmin";

export default function Dashboard() {
  const adminLogin = localStorage.getItem("adminToken");
  let navigate = useNavigate();

  useEffect(() => {
    if (!adminLogin) {
      navigate("/admin_log", { replace: true });
    }
  }, []);

  const [history, setHistory] = useState([]);
  var i = 1;
  useEffect(() => {
    fetch("http://localhost:9001/admin/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHistory(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="" id="home">
        <NavbarAdmin />
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          
          <div id="select-div">
            <div
              className="row tm-content-row"
              style={{ justifyContent: "space-around", width: "275%" }}
            ></div>

            <div
              className="col-12 tm-block-col"
              style={{ paddingLeft: "0px", marginTop: "7rem" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 className="" style={{ fontSize: "2.6rem" }}>
                  Orders List
                </h2>
                <div
                  className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll"
                  style={{ maxHeight: "fit-content" }}
                >
                  <table className="table">
                    <thead
                      style={{
                        backgroundColor: "rgb(189 224 255)",
                        color: "blue",
                      }}
                    >
                      <tr>
                        <th scope="col">ORDER NO.</th>
                        <th scope="col">DELIVERY</th>
                        <th scope="col">CUSTOMER NAME</th>
                        <th scope="col">LOCATION</th>
                        <th scope="col">TOTAL COST</th>
                        <th scope="col">START DATE</th>
                        <th scope="col">EST DELIVERY DUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((element) => (
                        <tr
                          style={{
                            fontSize: "17px",
                            color: "black",
                            backgroundColor: "aliceblue",
                          }}
                        >
                          <th scope="row">
                            <b>{element.id}</b>
                          </th>
                          <td>
                            {element.express ? (
                              <p style={{ fontWeight: "bold" }}>
                                Express Delivery
                              </p>
                            ) : (
                              <p>Normal Delivery</p>
                            )}
                          </td>
                          <td>
                            <b>{element.name}</b>
                          </td>
                          <td>
                            <b>{element.address}</b>
                          </td>
                          <td>
                            <b>{element.total_cost}</b>
                          </td>
                          <td>{element.date}</td>
                          <td>{element.expected_date}</td>
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
