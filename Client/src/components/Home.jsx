import Card from '../components/Card';
import "../css/home.css";

export default function Home() {
    const items = [
        {
            price: 1,
            name: "Watch",
            picNo: 1,
        },
        {
            price: 2,
            name: "Laptop",
            picNo: 6
        },
        {
            price: 3,
            name: "Apple",
            picNo: 3,
        },
        {
            price: 4,
            name: "Earphone",
            picNo: 4,
        },
        {
            price: 5,
            name: "EFNWEJF",
            picNo: 1,
        },
        {
            price: 6,
            name: "EFNWEJF",
            picNo: 6,
        },
    ];
    return (
        <>

            {/* carousel for homepage */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={require("../Images/pcic10.jpg")} style={{ height: 50 + "vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../Images/pic8.jpeg")} style={{ height: 50 + "vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={require("../Images/pic3.jpeg")} style={{ height: 50 + "vh" }} className="d-block w-100" alt="..." />
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

            {/* for displaying the cards */}
            <div id="home-cards">
                {items.map((item) => {
                    return <div className="one-card"> <Card 
                    key={item.price}
                    price={item.price}
                    name={item.name}
                    picNo={item.picNo} 
                    /> </div>
                })}
            </div>

            {/* horizontal div for images */}
            <div id="slider">
                <div id="slider-heading">Upto 60% off | Upgrade to Smart Devices</div>
                <div id="slider-images">
                    <img src ={require("../Images/Slider/img1.jpeg")} alt ="img"/>
                    <img src ={require("../Images/Slider/img2.jpeg")} alt ="img"/>
                    <img src ={require("../Images/Slider/img3.jpeg")} alt ="img"/>
                    <img src ={require("../Images/Slider/img4.jpeg")} alt ="img"/>
                </div>
            </div>
            </>
            );
}



