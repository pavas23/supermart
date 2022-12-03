
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import Home from './components/Home';
import Product from "./components/Product";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home key="1" />} />
          <Route path = "/products" element = {<Product key = "2"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

