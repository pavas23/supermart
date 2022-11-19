import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/css/app.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Home from './components/Home';
import Home1 from "./components/Navbar1";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import Navbar1 from "./components/Navbar1";


function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <div id="navbar">
            <Navbar1 />
          </div>
          {/* <div id = "dropdown">
            <Dropdown/>
          </div> */}
          <div id="home">
            <Routes>
              <Route path="/" element={<Home key="1"/>}/>
              <Route path="/user/login" element={<Login key="2"/>}/>
              <Route path = "/user/SignUp" element={<SignUp key = "3"/>}/>
              <Route path = "/user/profile" element = {<UserProfile key = "4"/>}/>
            </Routes>
          </div>
          <div id = "footer">
            <Footer/>
          </div>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;



