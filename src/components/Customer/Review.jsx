import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import customerContext from "../../context/customer/CustomerContext";
import { useContext } from "react";

export default function Review() {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;
  let navigate = useNavigate();

  const userLogin = localStorage.getItem("token");
  if (!userLogin) {
    navigate("/login", { replace: true });
  }

  const [review, setReview] = useState("");
  var customerContextResponse = useContext(customerContext);

  useEffect(() => {
    customerContextResponse.getCustomerID({
      authToken: localStorage.getItem("token"),
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(`${REACT_APP_APIURL}/customer/addReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: customerContextResponse.customer.name,
        email: customerContextResponse.customer.email,
        review: review,
      }),
    });
    window.alert("Thanks for your feedback!");
    navigate("/", { replace: true });
  };

  const onChange = (event) => {
    setReview(event.target.value);
  };

  return (
    <>
      <Navbar features={false} />
      <div className="login_page4">
        <div className="form-box4" style={{ marginTop: "20vh" }}>
          <div className="button-box5">
            <div id="btn7"> Review Our Website!</div>
            <button type="button"></button>
          </div>
          <form method="POST" onSubmit={handleSubmit} autoComplete="off">
            <div className="textarea">
              <textarea
                required
                cols="30"
                placeholder="Describe your experience.."
                value={review}
                onChange={onChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn6">
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
