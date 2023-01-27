import React, { useEffect, useState } from "react";
import ViewProject from "./ViewProjects";
import CreateProject from "./CreateProject";
import { useContext } from "react";
import { UserContext } from "../data/UserContext";
import { MdEmail } from "react-icons/md";
//when the page loads, display a login form
//after the user adds their details and clicks
//the submit button
//hide the form and display the full page
function YourProjects(props) {
  const [displayData, setDisplayData] = useState([]);
  const [user, setUser] = useState({
    name:"",
    password:"",
  });
  const [logged, setLogged] = useState({})
  const [currentDisplay,setCurrentDisplay] = useState(true)
  function handleSubmit(e){
    e.preventDefault()
    setCurrentDisplay(!currentDisplay)
    setLogged({...user})
  }
  return (
    currentDisplay ?
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id=""
      autoComplete="off"
      onChange={(e) => setUser({...user, name: e.target.value })}
      required
    />
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      onChange={(e) => setUser({...user, password: e.target.value })}
      required
    />
    <label htmlFor="username">Username</label>
    <button type="submit">Sign in</button>
  </form>
     :
    <div>
      <h2>{logged.name}, welcome to your projects!</h2>
      {displayData}
      <CreateProject />
      <ViewProject />
    </div>
  );
}
export default YourProjects;