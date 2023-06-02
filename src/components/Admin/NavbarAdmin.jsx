import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  var adminLogin = localStorage.getItem("adminToken");
  const handleLogout = () => {
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
          <Link to="/products">Products</Link>
          <Link to="/dashboard">Orders</Link>
          <Link to="/settings">Users</Link>
        </nav>

        <div className="icons">
          <Link to="/mainProducts">
            <div className="fas fa-search" id="search-btn"></div>
          </Link>
          <Link to="/checkout">
            <div className="fas fa-shopping-cart" id="cart-btn"></div>
          </Link>
          {adminLogin ? (
            <Link to="/products">
              <div className="fas fa-plus" id="login-btn"></div>
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
