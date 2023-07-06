import Card from "./Card";
import "../../css/MainProducts.css";
import { useEffect, useState } from "react";
import NavbarProducts from "./NavbarProducts";
import { useNavigate } from "react-router";
import Fuse from "fuse.js";

export default function MainProduct(props) {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  const url = `${REACT_APP_APIURL}/product/getAll`;

  const [items, setItems] = useState([]);
  const [fuseItems, setFuseItems] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [display, setDisplay] = useState(false);

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
      setFuseItems(response);
      setSelectedProducts(JSON.parse(localStorage.getItem("cart")));
    }
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display]);

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
  };

  const fuse = new Fuse(fuseItems, {
    keys: ["name", "price"],
    includeScore: true,
  });

  const displayNoProductsAvailable = () => {
    setDisplay(true);
  };

  const onChange = (event) => {
    var query = event.target.value.trim().toLowerCase();
    if (query.length === 0) {
      setDisplay(false);
      setItems(fuseItems);
    } else {
      query = query.charAt(0).toUpperCase() + query.slice(1);
      const results = fuse.search(query);
      if (results.length === 0) {
        setItems([]);
        if (display === false) {
          displayNoProductsAvailable();
        }
      } else {
        setDisplay(false);
        const searchedItems = results.map((result) => result.item);
        setItems(searchedItems);
      }
    }
  };

  var page;
  if (display === true) {
    page = (
      <>
        <div>
          <h1
            style={{
              marginTop: "25vh",
              textAlign: "center",
            }}
          >
            Oops !
          </h1>
          <img
            src={require("../../img/productNotFound.webp")}
            alt="No Product Found"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            style={{
              height: "50vh",
              width: "50vw",
              marginTop: "3vh",
              marginLeft: "25vw",
            }}
          />
        </div>
      </>
    );
  } else {
    page = (
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
    );
  }

  return (
    <>
      <NavbarProducts onChangeHandler={onChange} />
      {page}
    </>
  );
}
