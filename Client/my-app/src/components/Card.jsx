import { useState } from "react";
import "../css/card.css";
export default function Card(props) {
    const[qty,setQty] = useState(0);
    const handleAddProduct = () =>{
        var currQty = qty;
        if(currQty>=props.quantity){
            return;
        }
        setQty(currQty+1);
    }
    const handleSubProduct = () =>{
        var currQty = qty;
        if(currQty>=props.quantity){
            return;
        }
        if(currQty==0){
            return;
        }
        setQty(currQty-1);
    }
    const addToArray = () =>{
        for(var i=0;i<props.selectedProducts.length;i++){
            if(props.selectedProducts[i].name == props.name){
                // means the products is already in the array
                if(qty == 0)
                {
                    props.selectedProducts[i] = {};
                    return;
                }
                props.selectedProducts[i].quantity = qty;
                return;
            }
        }
        if(qty == 0){
            return;
        }
        props.selectedProducts.push({
            name:props.name,
            price:props.price,
            quantity:qty,
            productID:props.productID,
        });
        props.setSelectedProductsFunction(props.selectedProducts);
    }
    return (
        <>
<div key={props.key} className="group relative" id={props.name}>
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={props.src}
                //   alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-black">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {props.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-black">Selected Quantity : {qty}</p>
                </div>
                <p className="text-sm font-medium text-black">&#8377;{props.price}</p>
                <div>
                <div className="fas fa-plus" id="add-btn" onClick={handleAddProduct} style={{"borderStyle":"solid",
                "borderWidth":"0.5px","width":"25px","paddingLeft":"0.2%","float":"left","height":"22px","lineHeight":"22px"}} ></div>
                <div className="fas fa-minus" id="add-btn" onClick={handleSubProduct} style={{"borderStyle":"solid",
                "borderWidth":"0.5px","width":"25px","paddingLeft":"0.3%","float":"left","height":"22px","lineHeight":"22px"}} ></div>
                <div onClick={addToArray} style={{"cursor":"pointer","background":"linear-gradient(to right, #22db15, #fbff00)",
                "border":"0","outline":"none","border-radius":"30px","width":"120px","paddingLeft":"1%",
                "marginLeft":"120px","marginBottom":"20px"}}>
                    Add To Cart</div>
                </div>   
                
              </div>
            </div>


        </>
    );
}