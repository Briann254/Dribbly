import React, { useState } from "react";
import { useContext } from "react";
import { YourProjectsDataContext } from "../data/YourProjectsContext";

function UpdateYourProject({ singleShot, changeDisplay }) {
  // using context that holds data and passing it to display data
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

  // for users to change the image, description and title of a shot
  function handleSubmit(e) {
    e.preventDefault();
    changeDisplay(true)
    let removedShots = projectsData.filter((project) => {
      console.log(project);
      console.log(singleShot);
      return project.title !== singleShot.title;
    });
    setProjeData([updateShots, ...removedShots]);
  }

  // form to house the inputs
  return (
    <>
      <form onSubmit={handleSubmit} id="input">
        <input
        className="title-input"
          type="text"
          required
          placeholder="Title"
          onChange={(e) => {
            setUpdatedShots({
              ...updateShots,
              title: e.target.value,
            });
          }}
        ></input>
        <input
          className="description"
          type="text"
          required
          placeholder="Description"
          onChange={(e) => {
            setUpdatedShots({
              ...updateShots,
              description: e.target.value,
            });
          }}
        ></input>
        <input
        className="image-input"
          type="url"
          required
          placeholder="enter new image url"
          onChange={(e) => {
            setUpdatedShots({
              ...updateShots,
              images: { normal: e.target.value },
            });
          }}
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default UpdateYourProject;
