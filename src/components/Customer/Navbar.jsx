import { Link } from "react-router-dom";

export default function Navbar(props) {
  var adminLogin = localStorage.getItem("adminToken");
  var userLogin = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");
  };

  return (
    <>
      <header className="header2">
        <Link to="/" className="logo">
          {" "}
          <i className="fas fa-shopping-basket"></i> BBB{" "}
        </Link>

        <nav className="navbar2">
          <Link to="/">Home</Link>
          <Link
            to="/mainProducts"
            onClick={
              !userLogin
                ? (e) => {
                    e.preventDefault();
                  }
                : () => {}
            }
          >
            Products
          </Link>
          <Link
            to="/review"
            onClick={
              !userLogin
                ? (e) => {
                    e.preventDefault();
                  }
                : () => {}
            }
          >
            Review
          </Link>
          {/* <a href="#features">{`${features ? "Features" : ""}`}</a> */}
        </nav>

        <div className="icons">
          <Link
            to="/checkout"
            onClick={
              !userLogin
                ? (e) => {
                    e.preventDefault();
                  }
                : () => {}
            }
          >
            <div className="fas fa-shopping-cart" id="cart-btn"></div>
          </Link>
          {adminLogin ? (
            <Link to="/products">
              <div className="fas fa-plus" id="login-btn"></div>
            </Link>
          ) : (
            ""
          )}
          {userLogin ? (
            <Link to="/myprofile">
              <div className="fas fa-user" id="login-btn"></div>
            </Link>
          ) : !adminLogin ? (
            <Link to="/login">
              <div className="fas fa-user" id="login-btn"></div>
            </Link>
          ) : (
            " "
          )}
          {userLogin || adminLogin ? (
            <Link to="/login" onClick={handleLogout}>
              <div className="fas fa-user-minus" id="login-btn"></div>
            </Link>
          ) : (
            ""
          )}
        </div>

        <form action="" className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>

        <div className="shopping-cart">
          <div className="box2">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </header>
    </>
  );
}
