import "../css/card.css";
export default function (props) {
    return (
        <>
            <div className="card">
                <img src={ require(`../Images/pic${props.picNo}.jpg`) } className="card-img-top" alt="..."/>
                <div className ="card-body">
                <p className ="card-text">
                    {props.name}<br/>
                    ${props.price}
                </p>
                </div>
            </div>
        </>
    );
}


