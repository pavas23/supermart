/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../css/bootstrap.min.css";
import "swiper";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
    return (

        <>
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <Navbar features={true} />
            <section className="home2" id="home2">

                <div className="content2">
                    <h3><b>Fresh And</b><p><b> Organic </b></p><b>Products For Your Home</b></h3>
                    <a href="#" className="btn2">Shop Now</a>
                </div>

            </section>

            <section className="features2" id="features2">

                <h1 className="heading3"> <b>Our</b> <p>Features</p> </h1>


                <div className="swiper feature-slider">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide1 box" id="exception" style={{margin:"2vw",height:"40vh"}}>

                            <img src={require("../../image/feature-img-1.png")} alt="" />
                            <h3>Fresh And Organic</h3>
                            <p>All our products are organically grown with no genetic modification!</p>

                        </div>
                        <div className="swiper-slide1 box" id="exception" style={{margin:"2vw",height:"40vh"}}>

                            <img src={require("../../image/feature-img-2.png")} alt="" />
                            <h3>Free Delivery</h3>
                            <p>No delivery charges on orders over Rs.200</p>

                        </div>
                        <div className="swiper-slide1 box" id="exception" style={{margin:"2vw",height:"40vh"}}>

                            <img src={require("../../image/feature-img-3.png")} alt="" />
                            <h3>Easy Payments</h3>
                            <p>Innovative credit system that allows you to top up occassionally and spend endlessly!</p>
                        </div>
                    </div>
                </div>



            </section>

            <section className="categories2" id="categories2">

                <h1 className="heading2"> Product <p>Categories</p> </h1>
                <div className="swiper product-slider">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide box" style={{margin:".75vw"}}>
                            <img src={require("../../image/cat-1.png")} />
                            <h3>Vegetables</h3>
                            <a href="#" className="btn2">Shop Now</a>
                        </div>

                        <div className="swiper-slide box" style={{margin:".75vw"}}>
                            <img src={require("../../image/cat-2.png")} />
                            <h3>Fresh Fruits</h3>
                            <a href="#" className="btn2">Shop Now</a>
                        </div>

                        <div className="swiper-slide box" style={{margin:".75vw"}}>
                            <img src={require("../../image/cat-3.png")} />
                            <h3>Dairy Products</h3>
                            <a href="#" className="btn2">Shop Now</a>
                        </div>
                    </div>
                </div>

            </section>

            <section className="review2" id="review2">

                <h1 className="heading2"> Customer's <p>Review</p> </h1>

                <div className="swiper review-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide box" style={{margin:".75vw"}}>
                            <img src={require("../../image/pic-2.png")} alt="" />
                            <p>Timely Delivery</p>
                            <h3>Amit</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide box" style={{margin:".75vw"}}>
                            <img src={require("../../image/pic-3.png")} alt="" />
                            <p>Very Nice Service</p>
                            <h3>Saksham Bajaj</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box" style={{margin:".75vw"}}>
                            <img src={require("../../image/pic-4.png")} alt="" />
                            <p>Good Products</p>
                            <h3>Pavas Garg</h3>
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

            <section className="footer2" style={{height:"40vh",paddingTop:"7vh",marginTop:"5vh"}}>

                <div className="box-container2">

                    <div className="box2">
                        <h3> BBB <i className="fas fa-shopping-basket"></i> </h3>
                        <p>Follow us on our socials for egular updates on discounts!</p>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box2">
                        <h3>Contact Info</h3>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> +91 6263983740 </a>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> +91 9999178883 </a>
                        <a href="#" className="links"> <i className="fas fa-envelope"></i> f20210182@hyderabad.bits-pilani.ac.in </a>
                        <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> BPHC, Shamirpet, Hyderabad </a>
                    </div>

                    <div className="box2">
                        <h3>Quick Links</h3>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> Home </a>
                        <a href="#features" className="links"> <i className="fas fa-arrow-right"></i> Features </a>
                        <a href="#" className="links"> <i className="fas fa-arrow-right"></i> Products </a>
                        <a href="#categories" className="links"> <i className="fas fa-arrow-right"></i> Categories </a>
                        <Link to="/review"><a className="links"> <i className="fas fa-arrow-right"></i> Write a Review </a></Link>
                    </div>

                </div>
            </section>
        </>
    );
}