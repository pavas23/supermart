/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Checkout() {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [shipping, setShipping] = useState(0);
  const [products, setProducts] = useState([{}]);
  const [custArray, setCust] = useState([]);
  const [wallet, setWallet] = useState(0);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [customerID, setCustomerID] = useState(-1);
  const userLogin = localStorage.getItem("token");
  let navigate = useNavigate();

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
    setCust([customer.name, customer.email, customer.address]);
    setWallet(customer.credit);
  }

  const checkEnoughCredits = (newArr) => {
    if (newArr.totalCost > wallet) return false;
    else return true;
  };

  async function placeOrder(newArr) {
    if (checkEnoughCredits(newArr)) {
      var response = await fetch(`${REACT_APP_APIURL}/customer/sendOrder`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArr),
      });
      response = await response.json();
      window.alert("Order Placed Successfull");
      window.location.reload();
      return response;
    } else {
      window.alert("Insufficient Balance to place Order,top up your wallet !!");
      window.alert("Order was not placed!!");
      return false;
    }
  }

  async function getCustomerID(authTokenObj) {
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
    setCustomerID(response);
    getCust(response);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    var placedorder = {
      customerID: customerID,
      express: shipping !== 0 ? true : false,
      productList: JSON.parse(localStorage.getItem("cart")),
      totalCost: (shipping !== 0 ? true : false)
        ? totalcost() + 100
        : totalcost(),
      address: address,
    };
    placeOrder(placedorder);
  }

  useEffect(() => {
    async function checkout() {
      if (!userLogin) {
        navigate("/login", { replace: true });
      } else {
        let localCart = localStorage.getItem("cart");
        setProducts(JSON.parse(localCart));
        getCustomerID({ authToken: localStorage.getItem("token") });
      }
    }
    checkout();
    setTotal(totalcost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [credentials, setCredentials] = useState({
    address: "",
    express: false,
  });
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  function totalcost() {
    var total_price = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id !== -1)
        total_price += products[i].price * products[i].quantity;
    }
    return total_price;
  }

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "11vh", paddingTop: "5vh" }}>
        <div
          class="mt-20 text-black"
          style={{ color: "black", "margin-top": "20px" }}
        >
          <h1
            class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl text-black font-bold md:text-xl text-heading text-black"
            style={{
              display: "flex",
              flex: "1 1 0%",
              alignContent: "center",
              "justify-content": "center",
            }}
          >
            Checkout
          </h1>
        </div>
        <div
          class="container p-12 mx-auto"
          style={{
            width: "100%",
            padding: "12px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            class="flex flex-col w-full px-0 mx-auto md:flex-row"
            style={{ display: "flex", "flex-direction": "rows", width: "100%" }}
          >
            <div
              class="flex flex-col md:w-full"
              style={{
                display: "flex",
                "flex-direction": "column",
                width: "65%",
                marginRight: "6vw",
                marginLeft: "-5vw",
              }}
            >
              <h2
                class="mb-4 font-bold md:text-xl text-heading text-black"
                style={{ marginBottom: "4px" }}
              >
                Shipping Address
              </h2>
              <form
                class="justify-center w-full mx-auto text-black"
                method="POST"
                onSubmit={handleFormSubmit}
                style={{ justifyContent: "center", width: "100%" }}
              >
                <div class="">
                  <div
                    class="w-full"
                    style={{ width: "100%", marginBottom: "2vh" }}
                  >
                    <label
                      for="firstName"
                      class="block text-sm font-semibold text-gray-500"
                      style={{
                        display: "block",
                        fontWeight: "bold",
                        fontSize: "medium",
                      }}
                    >
                      Name
                    </label>
                    <input
                      disabled
                      name="firstName"
                      type="text"
                      placeholder={custArray[0]}
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      style={{
                        width: "100%",
                        "padding-left": "0px",
                        "padding-right": "0px",
                        marginBottom: "4px",
                        border: "solid",
                        borderColor: "gray300",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        paddingLeft: "10px",
                        background: "white",
                      }}
                    />
                  </div>
                  <div
                    class="w-full"
                    style={{ width: "100%", marginBottom: "2vh" }}
                  >
                    <label
                      for="firstName"
                      class="block text-sm font-semibold text-gray-500"
                      style={{
                        display: "block",
                        fontWeight: "bold",
                        fontSize: "medium",
                      }}
                    >
                      Email
                    </label>
                    <input
                      disabled
                      name="firstName"
                      type="text"
                      placeholder={custArray[1]}
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      style={{
                        width: "100%",
                        "padding-left": "0px",
                        "padding-right": "0px",
                        marginBottom: "4px",
                        border: "solid",
                        borderColor: "gray300",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        paddingLeft: "10px",
                        background: "white",
                      }}
                    />
                  </div>
                  <div
                    class="w-full border-gray-300 rounded"
                    style={{ width: "100%" }}
                  >
                    <label
                      for="Address"
                      class="block text-sm font-semibold text-gray-500"
                      style={{ display: "block", fontWeight: "bold" }}
                    >
                      Address
                    </label>
                    <textarea
                      class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder={custArray[2]}
                      value={address}
                      onChange={handleAddressChange}
                      required
                      style={{
                        width: "100%",
                        "padding-left": "0px",
                        "padding-right": "0px",
                        border: "solid",
                        borderColor: "gray300",
                        paddingLeft: "10px",
                      }}
                    ></textarea>
                  </div>

                  <label class="block mt-3 text-sm font-semibold text-gray-500">
                    Shipping Options
                  </label>
                  <div
                    className="mt-4 flex flex-row"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <div
                      class="flex items-center pl-4 pr-4 mr-4"
                      style={{
                        display: "flex",
                        alignContent: "center",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        marginRight: "4px",
                      }}
                    >
                      <input
                        defaultChecked
                        id="bordered-radio-1"
                        type="radio"
                        value="1"
                        name="bordered-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        onClick={() => {
                          setShipping(0);
                          credentials.express = false;
                          setTotal(totalcost());
                        }}
                        style={{
                          width: "20px",
                          height: "15px",
                          backgroundColor: "gray",
                          padding: "4px",
                          marginTop: "19px",
                        }}
                      />
                      <div class="ml-2 text-sm">
                        <label
                          for="bordered-radio-1"
                          class="font-medium text-black dark:text-gray-300 mt-2"
                        >
                          <p
                            className="text-lg"
                            style={{
                              marginBottom: "0",
                              fontSize: "larger",
                              fontWeight: "800",
                            }}
                          >
                            Standard Shipping &#40;Free&#41;
                          </p>

                          <p
                            id="helper-radio-text"
                            class="text-s font-normal text-gray-700  mb-2"
                          >
                            Order will be delivered within 3 hours.
                          </p>
                        </label>
                      </div>
                    </div>
                    <div
                      class="flex items-center pl-4 pr-4  ml-4"
                      style={{
                        display: "flex",
                        alignContent: "center",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        marginRight: "4px",
                      }}
                    >
                      <input
                        id="bordered-radio-2"
                        type="radio"
                        value="1"
                        name="bordered-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        onClick={() => {
                          setShipping(100);
                          credentials.express = true;
                          setTotal(total + 100);
                        }}
                        style={{
                          width: "20px",
                          height: "15px",
                          backgroundColor: "gray",
                          padding: "4px",
                          marginTop: "19px",
                        }}
                      />
                      <div class="ml-2 text-sm">
                        <label
                          for="bordered-radio-1"
                          class="font-medium text-black dark:text-gray-300 mt-2"
                        >
                          <p
                            className="text-lg"
                            style={{
                              marginBottom: "0",
                              fontSize: "larger",
                              fontWeight: "800",
                            }}
                          >
                            Express Shipping &#40;+&#8377;100&#41;
                          </p>

                          <p
                            id="helper-radio-text"
                            class="text-s font-normal text-gray-700  mb-2"
                          >
                            Order will be delivered within 1 hours.
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-4 flex flex-row"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      type="submit"
                      class="w-full px-6 py-2 text-white-900 bg-indigo-700 hover:bg-indigo-500 mr-2 rounded-full"
                      style={{
                        color: "white",
                        width: "200%",
                        background: "#1d9e2a",
                        border: "black",
                        borderRadius: "1000px",
                      }}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="flex flex-col w-full ml-5 lg:ml-12 lg:w-2/5"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "35%",
                marginLeft: "2px",
                marginRight: "-3vw",
              }}
            >
              <div class="pt-12 md:pt-0 2xl:ps-4">
                <div
                  class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4"
                  style={{
                    width: "80%",
                    height: "88px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    boxShadow: "gray 10px 10px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="black"
                      className="w-10 h-10"
                      style={{ width: "40px", height: "35px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                      />
                    </svg>
                    &nbsp;
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
                      Your Wallet
                    </h5>
                    <br />
                    <h2
                      className="mt-2 mr-2 text-xl font-semibold tracking-tight text-black dark:text-white"
                      style={{ fontSize: "larger" }}
                    >
                      Available Balance : &#8377;{wallet}
                    </h2>
                  </div>

                  <Link to="/wallet">
                    <a
                      href="#"
                      class="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Add Money to Wallet
                    </a>
                  </Link>
                </div>
                <h2
                  class="text-xl font-bold text-black"
                  style={{ marginBottom: "4px" }}
                >
                  Order Summary
                </h2>
                <div class="mt-8">
                  <div class="flex" style={{ display: "flex" }}>
                    <h2
                      class="text-xl font-bold"
                      style={{ color: "black", fontSize: "larger" }}
                    >
                      ITEMS {products.length}
                    </h2>
                  </div>
                  <div
                    class="flex items-center w-full py-2 text-lg font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-black"
                    style={{
                      display: "flex",
                      alignContent: "center",
                      width: "100%",
                      "--tw-border-opacity": "1",
                      borderColor:
                        "rgb(209 213 219 / var(--tw-border-opacity))",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                    }}
                  >
                    <p>SubTotal</p>
                    <p class="ml-2 text-black">&#8377;{totalcost()}</p>
                  </div>
                  <div
                    class="flex items-center w-full py-2 text-m font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-black"
                    style={{
                      display: "flex",
                      alignContent: "center",
                      width: "100%",
                      "--tw-border-opacity": "1",
                      borderColor:
                        "rgb(209 213 219 / var(--tw-border-opacity))",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                    }}
                  >
                    Shipping Charges
                    <p class="ml-2 text-black">&#8377;{shipping}</p>
                  </div>
                  <div
                    class="flex items-center w-full py-2  font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-black"
                    style={{
                      display: "flex",
                      alignContent: "center",
                      width: "100%",
                      "--tw-border-opacity": "1",
                      borderColor:
                        "rgb(209 213 219 / var(--tw-border-opacity))",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                    }}
                  >
                    <p> Total</p>
                    <p class="ml-2 text-black">
                      &#8377;{shipping ? totalcost() + 100 : totalcost()}
                    </p>
                  </div>
                  <div
                    class="flex flex-col space-y-7 overflow-y-auto"
                    style={{
                      height: "320px",
                      display: "flex",
                      flexDirection: "column",
                      overflowY: "auto",
                      background: "white",
                      "--tw-border-opacity": "1",
                      borderColor: "black",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      paddingTop: "2vh",
                    }}
                  >
                    {products.map((element) =>
                      element.id !== -1 ? (
                        <div
                          class="flex space-x-4"
                          style={{ display: "flex", marginLeft: "50px" }}
                        >
                          <div
                            style={{
                              width: "4.5rem",
                              height: "150px",
                              marginRight: "3rem",
                            }}
                          >
                            <img
                              src={element.src}
                              alt="image"
                              class="w-10"
                              style={{ width: "7vw", height: "7vw" }}
                            />
                          </div>
                          <div className="text-black">
                            <h2
                              class="text-xl font-bold text-black"
                              style={{ fontSize: "20px", fontWeight: "700" }}
                            >
                              {element.name}
                            </h2>
                            <p
                              class="text-sm text-black"
                              style={{ marginBottom: "0px !important" }}
                            >
                              Quantity : {element.quantity}
                            </p>
                            <p
                              class="text-red-600 text-black"
                              style={{
                                marginBottom: "0px !important",
                                marginTop: "-1.75vh",
                              }}
                            >
                              Price &#8377;{element.price}
                            </p>
                            <p
                              class="text-red-600 text-black"
                              style={{
                                marginBottom: "0px !important",
                                marginTop: "-1.75vh",
                              }}
                            >
                              <Button
                                onClick={() => {
                                  var arr_string = localStorage.getItem("cart");
                                  var arr = JSON.parse(arr_string);
                                  for (var i = 0; i < arr.length; i++) {
                                    if (arr[i].id === element.id) {
                                      arr.splice(i, 1);
                                    }
                                  }
                                  setProducts(arr);
                                  let x = JSON.stringify(arr);
                                  localStorage.setItem("cart", x);
                                  setTotal(totalcost());
                                }}
                                variant="contained"
                                color="success"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "red",
                                  cursor: "pointer",
                                  width: "6vw",
                                  height: "5vh",
                                  paddingTop: "-2vh !important",
                                  paddingBottom: "0vh !important",
                                  borderRadius: "9px",
                                  color: "white",
                                }}
                              >
                                Remove
                              </Button>
                            </p>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )
                    )}
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
