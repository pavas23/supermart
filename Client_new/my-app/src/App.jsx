
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import Home from './components/Home';
import Product from "./components/Product";
import Settings from "./components/Settings";
import Accounts from "./components/Accounts";
import AddProd from "./components/AddProd";
import Dashboard from "./components/Dashboard";
import EditProd from "./components/EditProd";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import ManagerLogin from "./components/ManagerLogin";
import Forgot from "./components/Forgot";
import Review from "./components/Review";
import Profile from "./components/Profile";
import Payment from "./components/Payment";
import Checkout from "./components/Checkout";
import Wallet from "./components/Wallet";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home key="1" />} />
          <Route path = "/products" element = {<Product key = "2"/>}/>
          <Route path = "/settings" element = {<Settings key = "3"/>}/>
          <Route path = "/accounts" element = {<Accounts key = "4"/>}/>
          <Route path = "/add_prod" element = {<AddProd key = "5"/>}/>
          <Route path = "/dashboard" element= {<Dashboard key = "6"/>}/>
          <Route path = "/edit_prod" element = {<EditProd key = "7"/>}/>
          <Route path = "/login" element = {<Login key = "8"/>}/>
          <Route path = "/forgot" element = {<Forgot key = "9"/>}/>
          <Route path = "/man_log" element = {<ManagerLogin key = "10"/>}/>
          <Route path = "/admin_log" element = {<AdminLogin key = "11"/>}/>
          <Route path = "/review" element = {<Review key = "12"/>}/>
          <Route path = "/profile" element = {<Profile key = "13"/>}/>
          <Route path = "/pay" element = {<Payment key = "14"/>}/>
          <Route path = "/checkout" element = {<Checkout key = "15"/>}/>
          <Route path = "/wallet" element = {<Wallet key = "16"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

