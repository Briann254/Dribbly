import React, { useState } from "react";
import { useContext } from "react";
import { YourProjectsDataContext } from "../data/YourProjectsContext";

function CreateProject(props) {
  // using context that houses the data from yourProjectsContext
  const [projectsData, setProjeData] = useContext(YourProjectsDataContext);
  // uses the state false
  const [display, setDisplay] = useState(false)
  const [posts, setPosts] = useState({
    id: 0,
    title: "",
    description: "",
    images: { normal: "" },
  });
  console.log(projectsData);
  // changes state to false
  function handleSubmit(e) {
    e.preventDefault();
    setDisplay(false)
    setProjeData([posts, ...projectsData]);
  }
  console.log(setPosts);

// uses if else statement when a user clicks the link it displays a form to add a new shot
  return (
    display ?
    <div>
      <form onSubmit={handleSubmit} id="createProject">
        <input
          className="create-title"
          type="text"
          required
          placeholder="Title"
          onChange={(e) => {
            setPosts({
              ...posts,
              title: e.target.value,
            });
          }}
        ></input>
        <input
          className="create-description"
          type="text"
          required
          placeholder="Description"
          onChange={(e) => {
            setPosts({
              ...posts,
              description: e.target.value,
            });
          }}
        ></input>
        <input      
          type="url"
          required
          placeholder="Enter image url"
          onChange={(e) => {
            setPosts({
              ...posts,
              images: { normal: e.target.value },
            });
          }}
        ></input>
        <button
          onClick={() => {
            setPosts({
              ...posts,
              id: `${Math.floor(Math.random() * Math.pow(10, 8))}`,
            });
          }}
        >
          Post
        </button>
      </form>
    </div>
    :
// displays a link as default 
    <a
    href="#"
    className="create-btn"
     onClick={()=>{
      setDisplay(true)
    
    }}>Want to add a new Post?</a>
  );
}

export default CreateProject;
