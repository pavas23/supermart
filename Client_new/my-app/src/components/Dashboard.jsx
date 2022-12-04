import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/templatemo-style.css";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
    <div className="" id="home">
        <nav className="navbar navbar-expand-xl">
            <div className="container h-100">
            <Link to="/dashboard"><a className="navbar-brand">
                    <h1 className="tm-site-title mb-0">Product Admin</h1>
                </a></Link>
                <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars tm-nav-icon"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100">
              <li className="nav-item">
              <Link to="/dashboard"><a className="nav-link active">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                  <span className="sr-only">(current)</span>
                </a></Link>
              </li>
              <li className="nav-item">
              <Link to="/products"><a className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Products
                </a></Link>
              </li>
  
              <li className="nav-item">
              <Link to="/accounts"><a className="nav-link">
                  <i className="far fa-user"></i> Accounts
                </a></Link>
              </li>
              <li className="nav-item">
              <Link to="/settings"><a
                  className="nav-link"
                  >
                  <i className="fas fa-cog"></i>
                  <span> Settings </span>
                </a></Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/login"><a className="nav-link d-block">
                  <h6>Logout</h6>
                </a></Link>
              </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="row">
               

                <div className="col">
                   
                    <p className="text-black mt-5 mb-5">Welcome back, <b>Admin</b></p>

                </div>
            </div>
            <div id = "select-div">
            <select className="custom-select_2" style={{"backgroundColor": "inherit",
            "outline": "none"}}>
                <option value="0">Filter By</option>
                <option value="1">Day</option>
                <option value="2">Week</option>
                <option value="3">Month</option>
               
              </select>
            <div className="row tm-content-row"></div>
               
                
               
               
                <div className="col-12 tm-block-col" style={{"paddingLeft": "0"}}>
                   

                    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                        
                        <h2 className="tm-block-title">Orders List</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ORDER NO.</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">OPERATORS</th>
                                    <th scope="col">LOCATION</th>
                                    <th scope="col">DISTANCE</th>
                                    <th scope="col">START DATE</th>
                                    <th scope="col">EST DELIVERY DUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><b>#122349</b></th>
                                    <td>
                                        <div className="tm-status-circle moving">
                                        </div>Moving
                                    </td>
                                    <td><b>Oliver Trag</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>485 km</b></td>
                                    <td>16:00, 12 NOV 2018</td>
                                    <td>08:00, 18 NOV 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122348</b></th>
                                    <td>
                                        <div className="tm-status-circle pending">
                                        </div>Pending
                                    </td>
                                    <td><b>Jacob Miller</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>360 km</b></td>
                                    <td>11:00, 10 NOV 2018</td>
                                    <td>04:00, 14 NOV 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122347</b></th>
                                    <td>
                                        <div className="tm-status-circle cancelled">
                                        </div>Cancelled
                                    </td>
                                    <td><b>George Wilson</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>340 km</b></td>
                                    <td>12:00, 22 NOV 2018</td>
                                    <td>06:00, 28 NOV 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122346</b></th>
                                    <td>
                                        <div className="tm-status-circle moving">
                                        </div>Moving
                                    </td>
                                    <td><b>William Aung</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>218 km</b></td>
                                    <td>15:00, 10 NOV 2018</td>
                                    <td>09:00, 14 NOV 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122345</b></th>
                                    <td>
                                        <div className="tm-status-circle pending">
                                        </div>Pending
                                    </td>
                                    <td><b>Harry Ryan</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>280 km</b></td>
                                    <td>15:00, 11 NOV 2018</td>
                                    <td>09:00, 17 NOV 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122344</b></th>
                                    <td>
                                        <div className="tm-status-circle pending">
                                        </div>Pending
                                    </td>
                                    <td><b>Michael Jones</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>218 km</b></td>
                                    <td>18:00, 12 OCT 2018</td>
                                    <td>06:00, 18 OCT 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122343</b></th>
                                    <td>
                                        <div className="tm-status-circle moving">
                                        </div>Moving
                                    </td>
                                    <td><b>Timmy Davis</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>218 km</b></td>
                                    <td>12:00, 10 OCT 2018</td>
                                    <td>08:00, 18 OCT 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122342</b></th>
                                    <td>
                                        <div className="tm-status-circle moving">
                                        </div>Moving
                                    </td>
                                    <td><b>Oscar Phyo</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>420 km</b></td>
                                    <td>15:30, 06 OCT 2018</td>
                                    <td>09:30, 16 OCT 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122341</b></th>
                                    <td>
                                        <div className="tm-status-circle moving">
                                        </div>Moving
                                    </td>
                                    <td><b>Charlie Brown</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>300 km</b></td>
                                    <td>11:00, 10 OCT 2018</td>
                                    <td>03:00, 14 OCT 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122340</b></th>
                                    <td>
                                        <div className="tm-status-circle cancelled">
                                        </div>Cancelled
                                    </td>
                                    <td><b>Wilson Cookies</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>218 km</b></td>
                                    <td>17:30, 12 OCT 2018</td>
                                    <td>08:30, 22 OCT 2018</td>
                                </tr>
                                <tr>
                                    <th scope="row"><b>#122339</b></th>
                                    <td>
                                        <div className="tm-status-circle moving">
                                        </div>Moving
                                    </td>
                                    <td><b>Richard Clamon</b></td>
                                    <td><b>London, UK</b></td>
                                    <td><b>150 km</b></td>
                                    <td>15:00, 12 OCT 2018</td>
                                    <td>09:20, 26 OCT 2018</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        <footer className="tm-footer row tm-mt-small">
            <div className="col-12 font-weight-light">
                <p className="text-center text-white mb-0 px-4 small">
                    Copyright &copy; <b>2018</b> All rights reserved. 
                    
                    Design: <a rel="nofollow noopener" href="https://templatemo.com" className="tm-footer-link">Template Mo</a>
                </p>
            </div>
        </footer>
    </div>
    </>
  );
}
