import { Link } from "react-router-dom";

export default function Review(){
    const btn = document.querySelector("button");
    const post = document.querySelector(".post");
    const widget = document.querySelector(".star-widget");
    const onclick = ()=>{
      widget.style.display = "none";
      post.style.display = "block";
      return false;
    }
    return(
        <>
            <div className="bg3"></div>
        <div className="container3">
            <div className="post3">
              <div className="text3">Thanks for rating us!</div>
              <Link to="/"><div className="home3">HOME</div></Link>
            </div>
            <div className="star-widget">
              <input type="radio" name="rate" id="rate-5"/>
              <label htmlFor="rate-5" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-4"/>
              <label htmlFor="rate-4" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-3"/>
              <label htmlFor="rate-3" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-2"/>
              <label htmlFor="rate-2" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-1"/>
              <label htmlFor="rate-1" className="fas fa-star"></label>
              <form action="#">
                <header></header>
                <div className="textarea3">
                  <textarea cols="30" placeholder="Describe your experience.."></textarea>
                </div>
                <div className="btn3">
                  <button type="submit" onClick = {onclick}>Post</button>
                </div>
              </form>
            </div>
          </div>
        </>
    );
}