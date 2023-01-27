import React, { useEffect, useState } from "react";
import ViewProject from "./ViewProjects";
import CreateProject from "./CreateProject";
import { useContext } from "react";
import { UserContext } from "../data/UserContext";

function YourProjects(props) {
  const [displayData, setDisplayData] = useState([]);
  const [user, setUser] = useContext(UserContext);
  // const [currentUser,setCurrentUser] = useState({})
  // useEffect(()=>{
  // setCurrentUser(user)
  // },[user])

  return (
    <div>
      <h2>Welcome {user.name} to your projects!</h2>
      {displayData} 
      <CreateProject />
      <ViewProject /> 
    </div>
  );
}

export default YourProjects;
