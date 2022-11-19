// import "../css/card.css";
export default function Card(props) {
    return (
        <>
            {/* <div className="card">
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
            </div> */}


<div key={props.key} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={ require(`../Images/cardpics/img${props.picNo}.jpeg`) }
                //   alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-black">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {props.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-black">Qty:0</p>
                </div>
                <p className="text-sm font-medium text-black">{props.price}</p>
              </div>
            </div>
        </>
    );
}



