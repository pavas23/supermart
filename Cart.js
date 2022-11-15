import { useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

export default function Cart(props) {
  const product = props.product.product;
  const [value, setValue] = useState(0);
  const [total_value, setTotal] = useState(0);
  const chooseValue = (value, index) => {
    var total = 0;

    product[index].quantity = value;
    product.forEach((element) => {
      total += element.price * element.quantity;
    });
    setValue(value);
    setTotal(total);
    console.log(product[index].quantity, index, total, total_value);
  };
  //   const [index,setIndex] = useState(0);

  // const chooseIndex =(index)=>{S
  //   setIndex(value);
  //   }

  var index = 0;

  // const [total,setTotal] = useState(0);
  function totalCost(list) {
    var total = 0;

    return total;
  }

  return (
    <>
      <Navbar />
      <div
        style={{ height: "fit-content", width: "fit-content", margin: "20px" }}
      >
        <h2 style={{ "text-align": "center" }}>My Cart</h2>
        {product.map((e) => {
          return (
            <ProductCard obj={e} chooseValue={chooseValue} index={index++} />
          );
        })}

        <h3
          style={{
            "text-align": "end",
            border: "10px 10px",
            marginRight: "51px",
          }}
        >
          Total : {total_value}
        </h3>
      </div>
    </>
  );
}
