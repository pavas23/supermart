import "./App.css";

import Cart from "./components/Cart";

function App() {
  const product = [
    {
      name: "Coca Cola",
      price: 50,
      quantity: 3,
      imageAddr:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXrF_jZtq49LeqKZgHjVS2FHdN648kEVoZg&usqp=CAU",
    },
    {
      name: "Brocoli 500gms",
      price: 80,
      quantity: 3,
      imageAddr:
        "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQp1Xb47ib3QxJgs_v--epnTxA0X_jmfrOqwA7j9SE99hFTcSIdeDYbXyLOgXnU4V1UDPaEnFG_iBJohmI",
    },
    {
      name: "Bottle 500ml",
      price: 100,
      quantity: 5,
      imageAddr:
        "https://www.ikea.com/in/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg?f=xs",
    },
    {
      name: "Classmate Notebook 200pages",
      price: 45,
      quantity: 3,
      imageAddr:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3SzP13YdW11uL1sNmx_wwiMF6odtmj9W-Q&usqp=CAU",
    },
    { name: "Trimax Gold", price: 200, quantity: 4, imageAddr: "" },
  ];
  return (
    <div className="App">
      <Cart product={{ product }} />
    </div>
  );
}

export default App;
