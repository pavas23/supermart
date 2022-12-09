import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import NavbarAdmin from "./NavbarAdmin";


export default function Dashboard() {

    const adminLogin = localStorage.getItem('adminToken');
    let navigate = useNavigate();
    
    useEffect(()=>{
        if(!adminLogin){
          navigate("/admin_log", { replace: true });
        }
      },[]);

    const [history, setHistory] = useState([]);
    var i=1;
  useEffect(() => {
     fetch('http://localhost:9001/admin/orders')
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
           setHistory(data);
          
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  return (
    <>
    <div className="" id="home">
        <NavbarAdmin/>
        <div className="container">
            <div className="row">
               

                <div className="col">
                   
                    <p className="text-black mt-5 mb-5">Welcome back, <b>Admin</b></p>

                </div>
            </div>
            <div id = "select-div">
            
            <div className="row tm-content-row"></div>
               
                
               
               
                <div className="col-12 tm-block-col" style={{"paddingLeft": "0"}}>
                   

                    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                        
                        <h2 className="tm-block-title">Orders List</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ORDER NO.</th>
                                    <th scope="col">DELIVERY</th>
                                    <th scope="col">CUSTOMER NAME</th>
                                    <th scope="col">LOCATION</th>
                                    <th scope="col">TOTAL COST</th> 
                                    <th scope="col">START DATE</th>
                                    <th scope="col">EST DELIVERY DUE</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                history.map((element)=>(
                                    <tr>
                                    <th scope="row"><b>{i++}</b></th>
                                    <td>
                                        {
                                         element.express ? (<p style={{fontWeight  : "bold"}}>Express Delivery</p>) :(<p>Normal Delivery</p>)
                                        }
                                    </td>
                                    <td><b>{element.name}</b></td>
                                    <td><b>{element.address}</b></td>
                                    <td><b>{element.total_cost}</b></td>
                                    <td>{element.date}</td>
                                    <td>{element.expected_date}</td>
                                </tr>   
                                ))
                               }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        <footer className="tm-footer row tm-mt-small">
            <div className="col-12 font-weight-light">
                <p className="text-center text-white mb-0 px-4 small">
                    BBB SuperMart.CopyRight.All Rights Reserved.
                    
                   
                </p>
            </div>
        </footer>
    </div>
    </>
  );
}
