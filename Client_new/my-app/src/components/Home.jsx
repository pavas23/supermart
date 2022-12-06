import "../css/bootstrap.min.css";
import "swiper";
import { Link } from "react-router-dom";

export default function Home() {
    return (

        <>
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

            <header className="header2">

                <Link to="/" className="logo"> <i className="fas fa-shopping-basket"></i> BBB </Link>

                <nav className="navbar2">
                    <Link to="/">Home</Link>
                    <a href="#features2">Features</a>
                    <a href="#products2">Products</a>
                    <a href="#categories2">Categories</a>
                    <Link to="/review"><a>Review</a></Link>
                </nav>

                <div className="icons">
                    <div className="fas fa-search" id="search-btn"></div>
                    <Link to="/checkout"><div className="fas fa-shopping-cart" id="cart-btn"></div></Link>
                    <Link to="/products"><div className="fas fa-plus" id="add-btn"></div></Link>
                    <Link to="/login"><div className="fas fa-user" id="login-btn"></div></Link>
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

            <section className="home2" id="home2">

                <div className="content2">
                    <h3><b>fresh and</b><p><b> organic </b></p><b>Products for your home</b></h3>
                    <a href="#" className="btn2">shop now</a>
                </div>

            </section>

            <section className="features2" id="features2">

                <h1 className="heading3"> <b>our</b> <p>features</p> </h1>

   
                <div className="swiper feature-slider">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide box">
                   
                        <img src={require("../image/feature-img-1.png")} alt="" />
                        <h3>Fresh and organic</h3>
                        <p>All our products are organically grown with no genetic modification!</p>
                    
                    </div>
                    <div className="swiper-slide box" id="exception">
                    
                        <img src={require("../image/feature-img-2.png")} alt="" />
                        <h3>free delivery</h3>
                        <p>No delivery charges on orders over Rs.200</p>
                    
                    </div>
                    <div className="swiper-slide box">
                    
                        <img src={require("../image/feature-img-3.png")} alt="" />
                        <h3>easy payments</h3>
                        <p>Innovative credit system that allows you to top up occassionally and spend endlessly!</p>
                    </div>
                    </div>
                    </div>

         

            </section>

            <section className="categories2" id="categories2">

                <h1 className="heading2"> product <p>categories</p> </h1>
                <div className="swiper product-slider">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide box">
                            <img src={require("../image/cat-1.png")} />
                            <h3>vegetables</h3>
                            <a href="#" className="btn2">shop now</a>
                        </div>

                        <div className="swiper-slide box">
                            <img src={require("../image/cat-2.png")} />
                            <h3>fresh fruits</h3>
                            <a href="#" className="btn2">shop now</a>
                        </div>

                        <div className="swiper-slide box">
                            <img src={require("../image/cat-3.png")} />
                            <h3>dairy products</h3>
                            <a href="#" className="btn2">shop now</a>
                        </div>

                        {/* <div class="swiper-slide box">
                            <img src={require("../image/cat-4.png")} alt=""/>
                            <h3>fresh meat</h3>
                            <a href="#" class="btn2">shop now</a>
                        </div> */}

                    </div>
                </div>

            </section>

            <section className="review2" id="review2">

                <h1 className="heading2"> customer's <p>review</p> </h1>

                <div className="swiper review-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide box">
                            <img src={require("../image/pic-2.png")} alt="" />
                            <p>I wish I was as cool as Pavas</p>
                            <h3>Nobody</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <img src={require("../image/pic-3.png")} alt="" />
                            <p>Pavas has an ass that shines</p>
                            <h3>Saksham Bajaj</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <img src={require("../image/pic-4.png")} alt=""/>
                            <p>I want to bleach my eyes</p>
                            <h3>Saksham Bajaj</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                </div>
                </div>

            </section>

            <section className="footer2">

                <div className="box-container2">

                    <div className="box2">
                        <h3> BBB <i className="fas fa-shopping-basket"></i> </h3>
                        <p>Follow us on our socials for regular updates on discounts!</p>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box2">
                        <h3>contact info</h3>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> +91 6263983740 </a>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> +91 9999178883 </a>
                        <a href="#" className="links"> <i className="fas fa-envelope"></i> f20210182@hyderabad.bits-pilani.ac.in </a>
                        <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> BPHC, Shamirpet, Hyderabad </a>
                    </div>

                    <div className="box2">
                        <h3>quick links</h3>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> home </a>
                        <a href="#features" className="links"> <i className="fas fa-arrow-right"></i> features </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> products </a>
                        <a href="#categories" className="links"> <i className="fas fa-arrow-right"></i> categories </a>
                        <Link to="/review"><a className="links"> <i className="fas fa-arrow-right"></i> write a review </a></Link>
                    </div>

                    <div className="box2">
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <input type="email" placeholder="your email" className="email" />
                        <input type="submit" value="subscribe" className="btn2" />
                        <img src={require("../image/payment.png")} className="payment-img" alt="" />
                    </div>

                </div>

                <div className="credit2"> created by <p> Group 1 </p> </div>

            </section>

            <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

            <script src="../js/Home.js"></script>
        </>
    );
}


