
import "../css/footer.css";

export default function Footer(){
    return(
        <>
            {/* <div id = "footer-main">
                <div id = "row-1">
                    <p>bbb@gmail.com, +91 1234567890</p>
                </div>
                <div id = "row-2">
                   <p> Customer Service: +91 4040404040 </p>
                </div>
                <div id = "row-3">
                    <div id = "socialIcons">
                        <ul>
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                        </ul>
                    </div>
                </div>
            </div> */}


<div className="space-y-6 border-t border-gray-200 py-6 px-4 bg-yellow-500">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900 text-center">
                      Contact Us 1234567890
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900 text-center">
                      bbb@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
        </>
    );
}

