import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { NavigationContext } from "../data/NavigationContext";
import { YourProjectsDataContext } from "../data/YourProjectsContext";
import Home from "./Home";
import ViewProject from "./ViewProjects";
import CreateProject from "./CreateProject";

function YourProjects(props) {
  const [currentPage, setCurrentPage] = useContext(NavigationContext);
  const [projectsData, setProjeData] = useContext(YourProjectsDataContext);
  const [displayData, setDisplayData] = useState([]);

  return (
    <div>
      <h2>All of your projects</h2>
      {displayData} 
      <ViewProject />
      <CreateProject />
      <button onClick={() => setCurrentPage(<Home />)}>Go to main page</button>
    </div>
  );
}

export default YourProjects;
