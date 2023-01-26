import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { YourProjectsDataContext } from "../data/YourProjectsContext";
function CreateProject(props) {
  const [projectsData, setProjeData] = useContext(YourProjectsDataContext);
  const [posts, setPosts] = useState({
    id: 0,
    title: "",
    description: "",
    images: { normal: "" },
  });
  console.log(projectsData);
  function handleSubmit(e) {
    e.preventDefault();
    setProjeData([...projectsData, posts]);
  }
  console.log(setPosts);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setPosts({
              ...posts,
              title: e.target.value,
            });
          }}
        ></input>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setPosts({
              ...posts,
              title: e.target.value,
            });
          }}
        ></input>
        <input
          type="url"
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
  );
}

export default CreateProject;
