import { useState } from "react";


export default function UserProfile(){

    const [data,setData] = useState({
        name:"",
        email:"",
    });

    const userData = async () =>{
        const response = await fetch("http://127.0.0.1:5000/getCustomer",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();
        console.log(json);
    }

    return(
        <>
        <p>
            User details
            ${userData}
        </p>
        </>
    );
}