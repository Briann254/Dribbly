import React from "react";
import { useContext } from "react";
import { YourProjectsDataContext } from "../data/YourProjectsContext";

// takes singleShot and changeDisplay as props
function DeletePosts({ singleShot , changeDisplay}) {
  const [projectsData, setProjeData] = useContext(YourProjectsDataContext);
  
  function handleDelete() {
    console.log(singleShot);
   changeDisplay(true)
    setProjeData(

    // to filter a single project
      projectsData.filter((project) => {
        return project.title !== singleShot.title;
      })
    );
  }
  return <button onClick={handleDelete} id="delete-btn">Delete</button>;
}

export default DeletePosts;
