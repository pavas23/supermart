import Card from "./Card";
import "../../css/MainProducts.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

export default function MainProduct(props) {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  const url = `${REACT_APP_APIURL}/product/getAll`;

  const [items, setItems] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      var response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setItems(response);
    }
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLogin = localStorage.getItem("token");
  let navigate = useNavigate();

  if (!userLogin) {
    navigate("/login", { replace: true });
  }

  const setSelectedProductsFunction = (selectedProdcutsFromCard) => {
    setSelectedProducts(selectedProdcutsFromCard);
    props.selectedProductsFunction(selectedProducts);
    let stringCart = JSON.stringify(selectedProducts);
    localStorage.setItem("cart", stringCart);
    console.log(localStorage.getItem("token"));
    console.log(selectedProducts);
  };

  return (
    <>
      <Navbar features={false} />
      <div id="home-cards">
        {items.map((item) => {
          return (
            <div
              className="one-card"
              style={{
                padding: "0",
                border: "1px solid white",
                borderBottomLeftRadius: "40px",
                borderBottomRightRadius: "40px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              {" "}
              <Card
                src={item.src}
                key={item.id}
                productID={item.id}
                price={item.price}
                name={item.name}
                quantity={item.quantity}
                selectedProducts={selectedProducts}
                setSelectedProductsFunction={setSelectedProductsFunction}
              />{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}
