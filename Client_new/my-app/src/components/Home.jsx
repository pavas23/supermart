import "../css/Home.css";
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
                    <a href="#features2">features</a>
                    <a href="#products2">products</a>
                    <a href="#categories2">categories</a>
                    <a href="pages/review.html">review</a>
                </nav>

                <div className="icons">
                    <div className="fas fa-search" id="search-btn"></div>
                    <div className="fas fa-shopping-cart" id="cart-btn"></div>
                    <div className="fas fa-plus" id="add-btn"></div>
                    <div className="fas fa-user" id="login-btn"></div>
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
                    <h3>fresh and <span>organic</span> products for your home</h3>
                    <a href="#" className="btn2">shop now</a>
                </div>

            </section>

            <section className="features2" id="features2">

                <h1 className="heading2"> our <span>features</span> </h1>

                <div className="box-container2">

                    <div className="box2">
                        <img src={require("../image/feature-img-1.png")} alt="" />
                        <h3>Fresh and organic</h3>
                        <p>All our products are organically grown with no genetic modification!</p>
                    </div>

                    <div className="box2">
                        <img src={require("../image/feature-img-2.png")} alt="" />
                        <h3>free delivery</h3>
                        <p>No delivery charges on orders over Rs.200</p>
                    </div>

                    <div className="box2">
                        <img src={require("../image/feature-img-3.png")} alt="" />
                        <h3>easy payments</h3>
                        <p>Innovative credit system that allows you to top up occassionally and spend endlessly!</p>
                    </div>

                </div>

            </section>

            <section className="categories2" id="categories2">

                <h1 className="heading2"> product <span>categories</span> </h1>
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
                    </div>
                </div>

            </section>

            <section className="review2" id="review2">

                <h1 className="heading2"> customer's <span>review</span> </h1>

                <div className="swiper review-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide box">
                            <img src={require("../image/pic-1.png")} alt="" />
                            <p>Pavas is so hot</p>
                            <h3>No one</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

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
                        <a href="pages/review.html" className="links"> <i className="fas fa-arrow-right"></i> write a review </a>
                    </div>

                    <div className="box2">
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <input type="email" placeholder="your email" className="email" />
                        <input type="submit" value="subscribe" className="btn2" />
                        <img src={require("../image/payment.png")} className="payment-img" alt="" />
                    </div>

                </div>

                <div className="credit2"> created by <span> Group 1 </span> </div>

            </section>

            <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

            <script src="../js/Home.js"></script>
        </>
    );
}


