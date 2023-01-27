import React, { useState } from 'react';
import React from "react";
import { useContext } from "react";
import { NavigationContext } from "../data/NavigationContext";
import YourProjects from "./YourProjects";

function Home(props) {
  const [currentPage, setCurrentPage] = useContext(NavigationContext);
  console.log(currentPage);

  return (
    <div>
      {/* <h1>Home page</h1>
      <button onClick={() => setCurrentPage(<YourProjects />)} >
        Go to your projects
      </button> */}
    </div>
  );
}

export default Home;
