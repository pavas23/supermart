import { Link } from "react-router-dom";
import { useState } from "react";
export default function () {
  const products = [
    {
      id: 1,
      name: "Coca Cola",
      price: 50,
      quantity: 1,
      imageAddr:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXrF_jZtq49LeqKZgHjVS2FHdN648kEVoZg&usqp=CAU",
    },
    {
      id: 2,
      name: "Brocoli 500gms",
      price: 100,
      quantity: 1,
      imageAddr:
        "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQp1Xb47ib3QxJgs_v--epnTxA0X_jmfrOqwA7j9SE99hFTcSIdeDYbXyLOgXnU4V1UDPaEnFG_iBJohmI",
    },
    {
      id: 3,
      name: "Bottle 500ml",
      price: 100,
      quantity: 1,
      imageAddr:
        "https://www.ikea.com/in/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg?f=xs",
    },
    {
      id: 4,
      name: "Classmate Notebook 200pages",
      price: 50,
      quantity: 1,
      imageAddr:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3SzP13YdW11uL1sNmx_wwiMF6odtmj9W-Q&usqp=CAU",
    },

    { id: 5, name: "Trimax Gold", price: 200, quantity: 1, imageAddr: "" },
    { id: 6, name: "White Board", price: 800, quantity: 1, imageAddr: "" },
  ];
  const [shipping, setShipping] = useState(0);
  function totalcost() {
    var total_price = 0;
    products.forEach((element) => {
      total_price += element.price * element.quantity;
    });

    // setTotal(total_price);
    return total_price;
  }
  const [total, setTotal] = useState(totalcost());
  return (
    <>
      <div class="mt-20 text-black" style={{ color: "black" }}>
        <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl text-black">
          BBB E-Commerce Checkout
        </h1>
      </div>
      <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div class="flex flex-col md:w-full">
            <h2 class="mb-4 font-bold md:text-xl text-heading text-black">
              Shipping Address
            </h2>
            <form
              class="justify-center w-full mx-auto text-black"
              method="post"
              action
            >
              <div class="">
                <div class="space-x-0 lg:flex lg:space-x-4">
                  <div class="w-full ">
                    <label
                      for="firstName"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Email"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <p
                      className="border-gray-300 rounded"
                      style={{
                        border: "2px",
                        "--tw-border-opacity": "1",
                        "border-color":
                          "rgb(209 213 219 / var(--tw-border-opacity))",
                        "border-style": "solid",
                        padding: "14px",
                        "font-size": "15px",
                      }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio, molestias vero. Nulla.
                    </p>
                  </div>
                </div>
                <div class="mt-4 border-gray-300 rounded">
                  <div class="w-full border-gray-300 rounded">
                    <label class="flex items-center text-sm group text-heading mt-3 mb-3">
                      <input
                        type="checkbox"
                        class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                      />
                      <span
                        class="ml-2 text-lg font-semibold"
                        style={{ color: "black" }}
                      >
                        Use saved Address
                      </span>
                    </label>
                    <label
                      for="Address"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>

                <div class="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    class="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4"
                    placeholder="Notes for delivery"
                  ></textarea>
                </div>
                <label class="block mt-3 text-sm font-semibold text-gray-500">
                  Shipping Options
                </label>
                <div className="mt-4 flex flex-row">
                <div class="flex items-center pl-4 pr-4 mr-4">
                    <input
                    defaultChecked
                      id="bordered-radio-1"
                      type="radio"
                      value="1"
                      name="bordered-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                      onClick={() => {
                        setShipping(0);
                        console.log(shipping);
                        setTotal(totalcost());
                      }}
                    />
                    <div class="ml-2 text-sm">
                      <label
                        for="bordered-radio-1"
                        class="font-medium text-black dark:text-gray-300 mt-2"
                      >
                        <span className="text-lg">
                        Standard Shipping &#40;Free&#41;
                        </span>
                      
                      <p
                        id="helper-radio-text"
                        class="text-s font-normal text-gray-700  mb-2"
                      >
                        Order will be delivered within 3 hours.
                      </p>
                      </label>
                    </div>
                  </div>
                  <div class="flex items-center pl-4 pr-4  ml-4">
                    <input
                      id="bordered-radio-2"
                      type="radio"
                      value="1"
                      name="bordered-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      onClick={() => {
                        setShipping(100);
                        console.log(shipping);
                        setTotal(totalcost() + 100);
                      }}
                    />
                    <div class="ml-2 text-sm">
                      <label
                        for="bordered-radio-2"
                        class="font-medium text-gray-900 mt-2"
                      >
                       <span className="text-lg">

                       Express Shipping 	&#40;+&#8377;100	&#41;
                       </span>
                     
                      <p
                        id="helper-radio-text"
                        class="text-s font-normal text-gray-700  mb-2"
                      >
                        Orders will be delivered within 1 hour.
                      </p>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-row">
                  <button
                    class="w-full px-6 py-2 text-white-900 bg-indigo-700 hover:bg-indigo-500 mr-2 rounded-full"
                    style={{ color: "white" }}
                  >
                    Pay With Wallet
                  </button>
                  <Link
                    to={"/user/CardPayment"}
                    class="w-full px-6 py-2 text-white-900 bg-indigo-700 hover:bg-indigo-500 rounded-full text-center"
                  >
                    <button style={{ color: "white" }}>Pay with Card</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div class="pt-12 md:pt-0 2xl:ps-4">
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="black"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                  />
                </svg>
                {/* <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
                  Your Wallet
                  
                </h5> */}

                <h2 className="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
                  Available Balance : &#8377;0000
                </h2>
                <a
                  href="#"
                  class="inline-flex items-center text-blue-600 hover:underline"
                >
                  Add Money to Wallet
                  <svg
                    class="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a>
              </div>
              <h2 class="text-xl font-bold text-black">Order Summary</h2>
              <div class="mt-8">
                <div class="flex ">
                  <h2 class="text-xl font-bold" style={{ color: "black" }}>
                    ITEMS {products.length}
                  </h2>
                </div>
                <div class="flex items-center w-full py-4 text-lg font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-black">
                  Subtotal
                  <span class="ml-2 text-black">&#8377;{totalcost()}</span>
                </div>
                <div class="flex items-center w-full py-4 text-m font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-black">
                  Shipping Charges
                  <span class="ml-2 text-black">&#8377;{shipping}</span>
                </div>
                <div
                  class="flex items-center w-full py-4  font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0 text-black"
                  style={{ fontSize: "larger" }}
                >
                  Total<span class="ml-2 text-black">&#8377;{total}</span>
                </div>
                <div
                  class="flex flex-col space-y-7 overflow-y-auto"
                  style={{ height: "320px" }}
                >
                  {products.map((element) => (
                    <div class="flex space-x-4">
                      <div>
                        <img src={element.imageAddr} alt="image" class="w-10" />
                      </div>
                      <div className="text-black">
                        <h2 class="text-xl font-bold text-black">
                          {element.name}
                        </h2>
                        <p class="text-sm text-black">
                          Quantity : {element.quantity}
                        </p>
                        <span class="text-red-600 text-black">Price</span>{" "}
                        &#8377;{element.price}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
