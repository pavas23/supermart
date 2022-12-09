import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate } from "react-router";
import NavbarAdmin from "./NavbarAdmin";

export default function Product() {
  
  const adminLogin = localStorage.getItem('adminToken');
  let navigate = useNavigate();
  
  if(!adminLogin){
    navigate("/admin_log", { replace: true });
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
     fetch('http://localhost:9001/manager/getAllProducts')
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
           setProducts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
 
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
      />
      <div className="container">
        <NavbarAdmin/>
      </div>
      <div
        className="d-flex"
        style={{
          backgroundImage: "url('./img/bg.jpeg')",
          backgroundSize: "70% 100%",
        }}
      >
        <div className="container mt-5" >
          <div className="row tm-content-row" style={{"justify-content":"space-around"}}>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
              <div
                className="tm-bg-primary-dark tm-block tm-block-products"
                style={{ backgroundColor: "white" }}
              >
                <div className="tm-product-table-container">
                  <table className="table table-hover tm-table-small tm-product-table">
                    <thead>
                      <tr>
                      
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">UNITS SOLD</th>
                        <th scope="col">IN STOCK</th>
                        <th scope="col">EXPIRY DATE</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                        products.map((element)=>(
                          <tr style={{fontSize : '17px'}}> 
                          
                          <td className="tm-product-name">
                           {element.name}
                          </td>
                          <td>{element.price}</td>
                          <td>{element.units_sold}</td>
                          <td>{element.quantity}</td>
                          <td>pls add</td>
                          <td>
                            <a href="#" className="tm-product-delete-link" onClick={
                              ()=>{
                                
                                fetch('http://localhost:9001/manager/deleteProduct',{method:"DELETE",headers: { "Content-Type": "application/json" },body:JSON.stringify(element)}).then(()=>{console.log('Prodcut Deleted');})
                              }   

                            }>
                              <i className="far fa-trash-alt tm-product-delete-icon"></i>
                            </a>
                          </td>
                        </tr>
                        ))
                     }
                      
                    </tbody>
                  </table>
                </div>
                <Link to="/add_prod"><a
                  className="btn btn-primary btn-block text-uppercase mb-3"
                >
                  Add new product
                </a></Link>
               
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
    </>
  );
}
