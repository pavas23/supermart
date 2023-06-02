import customerContext from "./CustomerContext";
import { useState } from "react";

const CustomerState = (props) => {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [customer, setCustomer] = useState({});
  const [history, setHistory] = useState([]);

  // get customer ID from authToken
  const getCustomerID = async (authTokenObj) => {
    var response = await fetch(
      `${REACT_APP_APIURL}/login/auth/customer/getID`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authTokenObj),
      }
    );
    response = await response.json();
    getCust(response);
    getHistory(response);
  };

  // get customer obj from customer id
  async function getCust(id) {
    var customer = await fetch(`${REACT_APP_APIURL}/customer/getCustomer`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    customer = await customer.json();
    setCustomer(customer);
  }

  // get customer order history from customer id
  async function getHistory(custId) {
    var response = await fetch(`${REACT_APP_APIURL}/customer/history`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: custId }),
    });
    response = await response.json();
    setHistory(response);
    localStorage.setItem("history", response);
  }

  return (
    <customerContext.Provider
      value={{
        getCustomerID: getCustomerID,
        customer: customer,
        history: history,
      }}
    >
      {props.children}
    </customerContext.Provider>
  );
};

export default CustomerState;
