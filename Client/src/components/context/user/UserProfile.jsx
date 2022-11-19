import { useState } from "react";



export default function UserProfile(props){
    const host = "http:127.0.0.1:5000/";
    const userIntitial = [];
    const [user,setUser] = useState(userIntitial);

    // Get all users
    const getUsers = () =>{
        // API call
        const url = `${host}/getAll`;
        const response = fetch(url,{
            method:"GET",
            headers:{
                "Content-type":"application/json",

            }
        })
    }


}