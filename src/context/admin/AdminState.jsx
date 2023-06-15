import adminContext from "./AdminContext";
import { useState } from "react";

const AdminState = (props) => {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [admin, setAdmin] = useState({});
  const [validSession,setValidSession] = useState(true);

  // get adminID from adminToken
  const getAdminID = async (authTokenObj) => {
    var response = await fetch(`${REACT_APP_APIURL}/login/auth/admin/getID`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authTokenObj),
    });
    response = await response.json();
    if(response !== -1){
      setValidSession(true);
      getAdmin(response);
    }else{
      setValidSession(false);
      setAdmin({
        name:"",
        email:"",
      })
    }
  };

  // get admin obj from admin id
  async function getAdmin(id) {
    var admin = await fetch(`${REACT_APP_APIURL}/admin/getAdmin`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    admin = await admin.json();
    setAdmin(admin);
  }
  
  return (
    <adminContext.Provider
      value={{
        getAdminID: getAdminID,
        admin: admin,
        validSession:validSession
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminState;
