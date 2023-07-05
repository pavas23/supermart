import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("managerToken");
  };

  return (
    <>
      <header className="header2">
        <Link to="/" className="logo">
          {" "}
          <i className="fas fa-shopping-basket"></i> BBB{" "}
        </Link>

        <nav className="navbar2" style={{ marginLeft: "-10vw" }}>
          <Link to="/products">Products</Link>
          <Link to="/dashboard">Orders</Link>
          <Link to="/orderAnalytics">Order Analytics</Link>
          {localStorage.getItem("adminToken") ? (
            <Link to="/settings">Users</Link>
          ) : (
            " "
          )}
        </nav>

        <div className="icons">
          <Link to="/admin_log" onClick={handleLogout}>
            <div className="fas fa-user-minus" id="login-btn"></div>
          </Link>
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
