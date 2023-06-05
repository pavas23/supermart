import { useState } from "react";
import "../../css/card.css";
import { Button } from "@material-tailwind/react";

export default function Card1(props) {
  const [qty, setQty] = useState(0);
  const handleAddProduct = () => {
    var currQty = qty;
    if (currQty >= props.quantity) {
      return;
    }
    setQty(currQty + 1);
  };
  const handleSubProduct = () => {
    var currQty = qty;
    if (currQty >= props.quantity) {
      return;
    }
    if (currQty === 0) {
      return;
    }
    setQty(currQty - 1);
  };
  const addToArray = () => {
    for (var i = 0; i < props.selectedProducts.length; i++) {
      if (props.selectedProducts[i].name === props.name) {
        if (qty === 0) {
          props.selectedProducts[i] = {};
          return;
        }
        props.selectedProducts[i].quantity = qty;
        return;
      }
    }
    if (qty === 0) {
      return;
    }
    props.selectedProducts.push({
      name: props.name,
      price: props.price,
      quantity: qty,
      id: props.productID,
      src: props.src,
    });
    props.setSelectedProductsFunction(props.selectedProducts);
  };
  return (
    <>
      <div key={props.key} className="group relative" id={props.name}>
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={props.src}
            alt={props.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            style={{ height: "30vh", width: "100%" }}
          />
        </div>
        <div
          className="mt-4 flex justify-between"
          style={{ marginBottom: "3vh" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="name-item">
              <h3
                className="text-sm text-black"
                style={{ textTransform: "capitalize", marginLeft: "0vw" }}
              >
                <span aria-hidden="true" className="absolute inset-0" />
                {props.name}
              </h3>
            </div>
            <div className="name-item">
              <p className="mt-1 text-sm text-black">
                Selected Quantity : {qty}
              </p>
            </div>
          </div>
          <div
            className="item-price"
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "2.5vw",
              alignItems: "center",
            }}
          >
            <p
              className="text-sm font-medium text-black"
              style={{ fontSize: "1.3rem" }}
            >
              &#8377; {props.price}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="product-buttons">
              <div
                className="fas fa-plus fa-2x"
                id="add-btn"
                onClick={handleAddProduct}
                style={{
                  width: "50px",
                  paddingLeft: "0.2%",
                  float: "left",
                  height: "22px",
                  lineHeight: "22px",
                  color: "#1ac756",
                }}
              ></div>
              <div
                className="fas fa-minus fa-2x"
                id="add-btn"
                onClick={handleSubProduct}
                style={{
                  width: "30px",
                  paddingLeft: "0.3%",
                  float: "left",
                  height: "22px",
                  lineHeight: "22px",
                  color: "#ec4141",
                }}
              ></div>
            </div>
            <Button
              variant="contained"
              color="success"
              style={{
                backgroundColor: "lightseagreen",
                cursor: "pointer",
                width: "7vw",
                border: "10px",
              }}
              onClick={addToArray}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
