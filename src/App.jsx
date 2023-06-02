import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Customer/Home";
import Product from "./components/Manager/Product";
import Settings from "./components/Admin/Settings";
import Accounts from "./components/Customer/Accounts";
import AddProd from "./components/Manager/AddProd";
import Dashboard from "./components/Admin/Dashboard";
import EditProd from "./components/Admin/EditProd";
import Login from "./components/Customer/Login";
import AdminLogin from "./components/Admin/AdminLogin";
import ManagerLogin from "./components/Manager/ManagerLogin";
import Forgot from "./components/Customer/Forgot";
import Review from "./components/Customer/Review";
import Profile from "./components/Customer/Profile";
import Checkout from "./components/Customer/Checkout";
import Wallet from "./components/Customer/Wallet";
import MainProducts from "./components/Customer/MainProducts";
import Register from "./components/Customer/Register";
import { useState } from "react";
import OtpSignUp from "./components/Customer/OtpSignUp";
import Reset from "./components/Customer/Reset";
import MyProfile from "./components/Customer/MyProfile";
import CustomerState from "./context/customer/CustomerState";

export default function App() {
  const [selectedProducts, setSelectedProductsFromApp] = useState([]);
  const selectedProductsFunction = (selectedProductsArgument) => {
    console.log("app.jsx");
    setSelectedProductsFromApp(selectedProductsArgument);
    console.log(selectedProducts);
  };

  const [email, setEmail] = useState("");
  const setEmailFunction = (email) => {
    setEmail(email);
  };

  const [otpApp, setOtp] = useState("");
  const setOtpFunction = (OtpArg) => {
    setOtp(OtpArg);
  };
  return (
    <>
    <CustomerState>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home key="1" />} />
            <Route path="/products" element={<Product key="2" />} />
            <Route path="/settings" element={<Settings key="3" />} />
            <Route path="/accounts" element={<Accounts key="4" />} />
            <Route path="/add_prod" element={<AddProd key="5" />} />
            <Route path="/dashboard" element={<Dashboard key="6" />} />
            <Route path="/edit_prod" element={<EditProd key="7" />} />
            <Route path="/login" element={<Login key="8" />} />
            <Route
              path="/forgot"
              element={
                <Forgot
                  key="9"
                  setEmailFunction={setEmailFunction}
                  setOtpFunction={setOtpFunction}
                />
              }
            />
            <Route path="/man_log" element={<ManagerLogin key="10" />} />
            <Route path="/admin_log" element={<AdminLogin key="11" />} />
            <Route path="/review" element={<Review key="12" />} />
            <Route path="/profile" element={<Profile key="13" />} />
            <Route path="/checkout" element={<Checkout key="15" />} />
            <Route path="/wallet" element={<Wallet key="16" />} />
            <Route
              path="/mainProducts"
              element={
                <MainProducts
                  key="16"
                  selectedProductsFunction={selectedProductsFunction}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  key="16"
                  setEmailFunction={setEmailFunction}
                  setOtpFunction={setOtpFunction}
                />
              }
            />
            <Route
              path="/otp/signUp"
              element={<OtpSignUp key="17" email={email} otpApp={otpApp} />}
            />
            <Route
              path="/reset"
              element={<Reset key="18" email={email} otpApp={otpApp} />}
            />
            <Route path="/myprofile" element={<MyProfile key="19" />} />
        </Routes>
      </BrowserRouter>
    </CustomerState>
    </>
  );
}
