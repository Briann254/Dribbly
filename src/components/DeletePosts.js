import React from "react";
import { useContext } from "react";
import { YourProjectsDataContext } from "../data/YourProjectsContext";

function DeletePosts({ singleShot }) {
  const [projectsData, setProjeData] = useContext(YourProjectsDataContext);
  function handleDelete() {
    console.log(singleShot);
    setProjeData(
      projectsData.filter((project) => {
        return project.title !== singleShot.title;
      })
    );
  }
  return <button onClick={handleDelete}>Delete</button>;
}

export default DeletePosts;
