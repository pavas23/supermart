import "../css/card.css";
export default function Card(props) {
    return (
        <>
            <div className="card">
                <img src={ require(`../Images/cardpics/img${props.picNo}.jpeg`) } className="card-img-top" alt="..."/>
                <div className ="card-body">
                <p className ="card-text">
                    {props.name}<br/>
                    MRP Rs.{props.price}<br/>
                    <span id="qyt-card">
                        Qty &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add&nbsp;&nbsp;<i className="fa-solid fa-cart-shopping"></i>
                    </span>
                </p>
                </div>
            </div>
        </>
    );
}



