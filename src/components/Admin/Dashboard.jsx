import "../../css/bootstrap.min.css";
import "../../css/fontawesome.min.css";
import "../../css/templatemo-style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import adminContext from "../../context/admin/AdminContext";
import managerContext from "../../context/manager/ManagerContext";
import NavbarAdmin from "./NavbarAdmin";

export default function Dashboard() {
  let navigate = useNavigate();
  var adminContextResponse = useContext(adminContext);
  var managerContextResponse = useContext(managerContext);
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [history, setHistory] = useState([]);

  const orderHistory = async () => {
    var response = await fetch(`${REACT_APP_APIURL}/admin/orders`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setHistory(response);
  };

  useEffect(() => {
    orderHistory();
    adminContextResponse.getAdminID({
      adminToken: localStorage.getItem("adminToken"),
    });
    managerContextResponse.getManagerID({
      managerToken: localStorage.getItem("managerToken"),
    });
    if (
      !adminContextResponse.validSession &&
      !managerContextResponse.validSession
    ) {
      navigate("/admin_log", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminContextResponse.validSession, managerContextResponse.validSession]);

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
                  justifyContent: "center",
                  marginLeft: "6vw",
                  marginRight: "7vw",
                  marginTop: "16vh",
                }}
              >
                <h2
                  className=""
                  style={{ fontSize: "3rem", textAlign: "center" }}
                >
                  Order List
                </h2>
                <br />
                <div
                  className="tm-bg-primary-dark tm-block tm-block-taller"
                  style={{ maxHeight: "fit-content" }}
                >
                  <table className="table">
                    <thead
                      style={{
                        backgroundColor: "rgb(189 224 255)",
                        color: "blue",
                        textAlign: "center",
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
                            textAlign: "center",
                          }}
                        >
                          <th scope="row">
                            <b>{element.id}</b>
                          </th>
                          <td>
                            {element.express ? (
                              <>Express Delivery</>
                            ) : (
                              <>Normal Delivery</>
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
