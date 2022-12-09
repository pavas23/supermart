import Card from '../components/Card';
import "../css/MainProducts.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router";

export default function MainProduct(props) {
    const url = "http://127.0.0.1:9001/product/getAll" // url for getting all the products available
    const[items,setItems] = useState([]);
    useEffect(()=>{
        async function getProducts(){
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
        };
        getProducts();
    },[]);

    const userLogin = localStorage.getItem('token');
    let navigate = useNavigate();

    if(!userLogin){
      navigate("/login", { replace: true });
    }

    var url1 = "http://127.0.0.1:9001/customer/setCart";

    async function setCart(){
        var response = await fetch(url1,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedProducts),
        });
    }

    const[selectedProducts,setSelectedProducts] = useState([]);

    const setSelectedProductsFunction = (selectedProdcutsFromCard)=>{
        setSelectedProducts(selectedProdcutsFromCard);
        props.selectedProductsFunction(selectedProducts);
        for(var i=0;i<selectedProducts.length;i++){
            selectedProducts[i].customerID = parseInt(localStorage.getItem("token"));
        }
        console.log(localStorage.getItem("token"));
        console.log(selectedProducts);
        setCart();
    }

    return (
        <>
        <Navbar features={false}/>

            <div id="home-cards">
                {items.map((item) => {
                    return <div className="one-card"> <Card
                        src = {item.src}
                        key={item.id}
                        productID={item.id}
                        price={item.price}
                        name={item.name}
                        quantity = {item.quantity}
                        selectedProducts = {selectedProducts}
                        setSelectedProductsFunction = {setSelectedProductsFunction}
                    /> </div>
                })}
            </div>

        </>
    );
}



