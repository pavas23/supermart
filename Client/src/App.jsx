import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/css/app.css";
import Home from './components/Home';
import Login from "./components/Login";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <div id="navbar">
            <Navbar />
          </div>
          <div id="home">
            <Routes>
              <Route path="/" element={<Home key="1"/>}/>
              <Route path="/user/login" element={<Login key="2"/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;


