import Card from '../components/Card';
import "../css/home.css";

export default function Home() {
    const items = [
        {
            id:1,
            price: 10,
            name: "Watermelon",
            picNo: 1,
        },
        {
            id:2,
            price: 20,
            name: "Pepsi",
            picNo: 2,
        },
        {
            id:3,
            price: 28,
            name: "Medimix",
            picNo: 3,
        },
        {
            id:4,
            price: 20,
            name: "Lays",
            picNo: 4,
        },
        {
            id:5,
            price: 35,
            name: "CloseUp",
            picNo: 5,
        },
        {
            id:6,
            price: 46,
            name: "All in One",
            picNo: 6,
        },
    ];
    return (
        <>

            {/* carousel for homepage */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={require("../Images/img4.jpeg")} style={{ height: 50 + "vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../Images/img2.jpeg")} style={{ height: 50 + "vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={require("../Images/img3.jpg")} style={{ height: 50 + "vh" }} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* horizontal div for images */}
            <div id="slider">
                <div id="slider-heading">Our Catalogue</div>
                <div id="slider-images">
                    <span><img src={require("../Images/img5.jpeg")} alt="img" /><br />Fruits</span>
                    <span><img src={require("../Images/img6.webp")} alt="img" /><br />Vegetables</span>
                    <span><img src={require("../Images/img7.jpeg")} alt="img" /><br />Dairy and Bakery</span>
                    <span><img src={require("../Images/img8.jpeg")} alt="img" /><br />Snacks</span>
                    <span> <img src={require("../Images/img9.jpeg")} alt="img" /><br />Beverages</span>
                    <span> <img src={require("../Images/img10.jpeg")} alt="img" /><br />Personal Care</span>
                </div>
            </div>

            {/* for displaying the cards */}

            <div id="home-cards">
                {items.map((item) => {
                    return <div className="one-card"> <Card
                        key={item.id}
                        price={item.price}
                        name={item.name}
                        picNo={item.picNo}
                    /> </div>
                })}
            </div>

        </>
    );
}



