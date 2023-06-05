import { Link } from "react-router-dom";

export default function Navbar(props) {
  var adminLogin = localStorage.getItem("adminToken");
  var userLogin = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <header className="header2">
        <Link to="/" className="logo">
          {" "}
          <i className="fas fa-shopping-basket"></i> BBB{" "}
        </Link>

        <nav
          className="navbar2"
          style={{
            marginRight: "-8vw",
          }}
        >
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
        </nav>

        <div className="icons">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={props.onChangeHandler}
            style={{
              height: "35px",
              border: "8px",
              backgroundColor: "#f4f4f4",
              color: "black",
            }}
          />
          {/* <div className="fas fa-search" id="search-btn"></div> */}
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
          ) : (
            <Link to="/login">
              <div className="fas fa-user" id="login-btn"></div>
            </Link>
          )}
          {userLogin ? (
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
