import React, { useEffect, useState } from "react";
import ViewProject from "./ViewProjects";
import CreateProject from "./CreateProject";
import { IconContext } from "react-icons";
import { BiUserCircle } from "react-icons/bi";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          required
          id=""
          autoComplete="off"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          required
          id="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <label>
        Bio:
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
      <div className="user-area">
        <h1></h1>
        <IconContext.Provider
          value={{ className: "fa-pull-left", size: 190, margin: "0px" }}
        >
          <BiUserCircle />
        </IconContext.Provider>
        <div className="user-text">
        <h2 className="username">{logged.name}</h2>
        <div className="bio-sec">
        <h3 className="bio">{logged.bio}</h3>
        </div>
        </div>
      </div>
      <CreateProject />
      <ViewProject />
    </div>
  );
}
export default YourProjects;
