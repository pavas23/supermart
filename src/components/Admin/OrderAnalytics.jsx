import { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useContext } from "react";
import adminContext from "../../context/admin/AdminContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import NavbarAdmin from "./NavbarAdmin";
import { Colors } from "chart.js";

export default function Analytics(props) {
  let navigate = useNavigate();
  var adminContextResponse = useContext(adminContext);
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  ChartJS.register(Colors);

  // Line graph for total order amount vs order id
  const [orderAmount, setOrderAmount] = useState({
    labels: [],
    datasets: [],
  });

  // Pie Chart for number of orders of normal vs express delivery
  const [deliveryType, setDeliveryType] = useState({
    labels: [],
    datasets: [],
  });

  // Bar graph for each customer vs total expenditure of that customer
  const [customerTotalAmount, setCustomerTotalAmount] = useState({
    labels: [],
    datasets: [],
  });

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
    response.reverse();

    // Line graph for total order amount vs order id
    setOrderAmount({
      labels: response.map((element) => element.id),
      datasets: [
        {
          label: "Total Order Amount (Rs) vs Order ID",
          data: response.map((element) => element.total_cost),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2.5,
        },
      ],
    });

    // Pie Chart for number of orders of normal vs express delivery
    var normalCount = 0;
    var expressCount = 0;
    for (var ele of response) {
      if (ele.express) expressCount++;
      else normalCount++;
    }
    setDeliveryType({
      labels: ["Normal Delivery", "Express Delivery"],
      datasets: [
        {
          label: "Number of Orders",
          data: [normalCount, expressCount],
          backgroundColor: ["#50AF95", "#f3ba2f"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });

    // Bar graph for each customer vs total expenditure of that customer
    // sorting the order list according to customer ID
    response.sort((a, b) => {
      return a.customerID - b.customerID;
    });

    // calculating order total across all orders for each customer based on customer ID
    var list = [];
    if (response.length === 1) {
      list.push({
        customerID: response[0].customerID,
        customerName: response[0].name,
        total: response[0].total_cost,
      });
    }
    for (let i = 0; i < response.length - 1; i++) {
      var totalAmt = 0;
      totalAmt += response[i].total_cost;
      while (
        i + 1 < response.length &&
        response[i].customerID === response[i + 1].customerID
      ) {
        totalAmt += response[i + 1].total_cost;
        i++;
      }
      list.push({
        customerID: response[i].customerID,
        customerName: response[i].name,
        total: totalAmt,
      });
      if (i === response.length - 2) {
        list.push({
          customerID: response[i + 1].customerID,
          customerName: response[i + 1].name,
          total: response[i + 1].total_cost,
        });
      }
    }
    setCustomerTotalAmount({
      labels: list.map((element) => element.customerName),
      datasets: [
        {
          label: "Total Expenditure By Each Customer (₹) ",
          data: list.map((element) => element.total),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    orderHistory();
    adminContextResponse.getAdminID({
      adminToken: localStorage.getItem("adminToken"),
    });
    if (!adminContextResponse.validSession) {
      navigate("/admin_log", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminContextResponse.validSession]);

  return (
    <>
      <NavbarAdmin />
      <h2
        className=""
        style={{ fontSize: "2.5rem", textAlign: "center", marginTop: "16vh" }}
      >
        Order Analytics
      </h2>
      <div
        className="tm-bg-primary-dark tm-block tm-block-taller"
        style={{
          maxHeight: "fit-content",
          height: "200vh",
          width: "80vw",
          marginLeft: "10vw",
          marginTop: "4vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "80vw",
            marginLeft: "-5vw",
          }}
        >
          <div
            style={{
              width: "55vw",
              height: "50vh",
              marginBottom: "18vh",
              alignContent: "center",
            }}
          >
            <h3>Total Expenditure By Each Customer (₹)</h3>
            <br />
            <Bar data={customerTotalAmount} />
          </div>

          <div
            style={{
              width: "55vw",
              height: "50vh",
              marginBottom: "18vh",
              alignContent: "center",
            }}
          >
            <h3>Total Order Amount (₹) vs Order ID</h3>
            <br />
            <Line data={orderAmount} />
          </div>

          <div
            style={{
              width: "50vw",
              height: "50vh",
              paddingLeft: "12vw",
            }}
          >
            <h3 style={{ marginLeft: "-12vw" }}>Delivery Type</h3>
            <br />
            <Pie data={deliveryType} />
          </div>
        </div>
      </div>
    </>
  );
}
