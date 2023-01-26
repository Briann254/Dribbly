import React, { useState } from "react";
import { useContext } from "react";
import { YourProjectsDataContext } from "../data/YourProjectsContext";

function UpdateYourProject({ singleShot }) {
  const [projectsData, setProjeData] = useContext(YourProjectsDataContext);
  const [updateShots, setUpdatedShots] = useState({
    description: "",
    height: singleShot.height,
    html_url: singleShot.html_url,
    id: singleShot.id,
    images: { normal: "" },
    low_profile: singleShot.low_profile,
    projects: singleShot.projects,
    tags: singleShot.tags,
    title: "",
    updated_at: singleShot.updateShots,
    video: singleShot.video,
    width: singleShot.width,
  });
  function handleSubmit(e) {
    e.preventDefault();
    let removedShots = projectsData.filter((project) => {
      console.log(project);
      console.log(singleShot);
      return project.title !== singleShot.title;
    });
    setProjeData([updateShots, ...removedShots]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setUpdatedShots({
              ...updateShots,
              title: e.target.value,
            });
          }}
        ></input>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setUpdatedShots({
              ...updateShots,
              description: e.target.value,
            });
          }}
        ></input>
        <input
          type="text"
          placeholder="enter new image url"
          onChange={(e) => {
            setUpdatedShots({
              ...updateShots,
              images: { normal: e.target.value },
            });
          }}
        ></input>
        <button type="submit">Update posts</button>
      </form>
    </>
  );
}

export default UpdateYourProject;
