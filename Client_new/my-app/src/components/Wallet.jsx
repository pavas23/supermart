export default function WalletPayment(){
    return(
        <>
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-10 mb-10">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 text-center">Enter E-mail and Password</h5>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 " placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-10">
                   <p className="text-gray-900 " style={{fontSize : "x-large"}}>Total Amount : </p>
                </div>
                
            </div>
            <p className="text-gray-900 ml-auto" style={{fontSize : "x-large"}}>&#8377;0000</p>
        </div>
        <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confirm Payment</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
             <a href="#" className="text-blue-700 hover:underline dark:text-blue-500 text-center">Add Money to Wallet</a>
        </div>
    </form>
</div>
</>
    );
}