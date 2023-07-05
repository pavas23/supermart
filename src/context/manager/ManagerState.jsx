import managerContext from "./ManagerContext";
import { useState } from "react";

const ManagerState = (props) => {
  const REACT_APP_APIURL = process.env.REACT_APP_APIURL;

  const [validSession, setValidSession] = useState(true);

  // get managerID from managerToken
  const getManagerID = async (authTokenObj) => {
    var response = await fetch(`${REACT_APP_APIURL}/login/auth/manager/getID`, {
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
    if (response !== -1) {
      setValidSession(true);
    } else {
      setValidSession(false);
    }
  };

  return (
    <managerContext.Provider
      value={{
        getManagerID: getManagerID,
        validSession: validSession,
      }}
    >
      {props.children}
    </managerContext.Provider>
  );
};

export default ManagerState;
