import { useState } from "react";
import "./ProductCard.css";
var quantity = 0;
function ProductCard(props) {
  const [count, setCount] = useState(props.obj.quantity);
  function logs() {
    console.log(props.obj.quantity);
  }
  return (
    <div className="ProductCard">
      <ul className="card">
        <div id="imgdiv">
          <img
            src={props.obj.imageAddr}
            alt="No image found"
            id="ProductImg"
          ></img>
        </div>

        <div id="productName">
          <p id="nameSpan">{props.obj.name}</p>
        </div>

        <div className="buttonAS">
          <button
            class="buttons"
            role="button"
            onClick={() => {

              if (count > 0) {
                setCount(count - 1);
                props.chooseValue(count-1,props.index);
              }
            }}
          >
            -
          </button>
        </div>
        <div id="divInput">
          <input id="input" placeholder="0" value={count}></input>
        </div>

        <div className="buttonAS">
          <button
            class="buttons"
            role="button"
            onClick={() => {
             
              if (count >= 0) {
                setCount(count + 1);
                props.chooseValue(count+1,props.index);
              }
            }}
          >
            +
          </button>
        </div>
        <div>
          <span id="productPrice">&#8377;{props.obj.price }</span>
        </div>
      </ul>
    </div>
  );
}
export default ProductCard;
