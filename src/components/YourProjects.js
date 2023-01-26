import React, { useState } from "react";
import ViewProject from "./ViewProjects";
import CreateProject from "./CreateProject";

function YourProjects(props) {
  const [displayData, setDisplayData] = useState([]);

  return (
    <div>
      <h2>All of your projects</h2>
      {displayData} 
      <CreateProject />
      <ViewProject /> 
    </div>
  );
}

export default YourProjects;
