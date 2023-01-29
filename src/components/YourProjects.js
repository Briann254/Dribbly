import React, { useEffect, useState } from "react";
import ViewProject from "./ViewProjects";
import CreateProject from "./CreateProject";
import { IconContext } from "react-icons";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

//when the page loads, display a login form
//after the user adds their details and clicks
//the submit button
//hide the form and display the full page
function YourProjects(props) {
  const [displayData, setDisplayData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    password: "",
    bio: "",
  });
  const [logged, setLogged] = useState({});
  // setting the state to true first for users to sign in and false so that it displayes the last page
  const [currentDisplay, setCurrentDisplay] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    setCurrentDisplay(!currentDisplay);
    setLogged({ ...user });
  }
  return currentDisplay ? (
    <form onSubmit={handleSubmit} className='signin'>
      <h2 className="sign">Sign In</h2>
      <label htmlFor="username">
        <input
          type="text"
          placeholder="Username"
          required
          autoComplete="off"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          placeholder="Password"
          required
          id="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <label>
        <textarea
          type="text"
          placeholder="Add bio"
          onChange={(e) => setUser({ ...user, bio: e.target.value })}
        ></textarea>
      </label>
      <button type="submit">Sign in</button>
    </form>
  ) : (
    <div>
       <h1 className="header-1">Your Shots</h1>
       
      <div className="user-area"> 
        <IconContext.Provider
          value={{ className: "fa-pull-left", size: 190, color:'black'}}
        >
          <BiUserCircle />
        </IconContext.Provider>
        
        <div className="user-text">
        <h2 className="username">{logged.name}</h2>
        <div className="bio-sec">
        <h3 className="bio">{logged.bio}</h3>
       
        </div>
        <Link exact to='/' target='_self'>
        <button className="logout-btn">LogOut</button>
         </Link>
        </div>
      </div>
      <CreateProject />
      <ViewProject />
    </div>


  );
}
export default YourProjects;
