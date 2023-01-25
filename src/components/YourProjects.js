import React from "react";
import { useContext } from 'react';
import { NavigationContext } from '../data/NavigationContext';
import { YourProjectsDataContext } from '../data/YourProjectsContext';
import Home from './Home';

function YourProjects(props) {
const [currentPage,setCurrentPage] = useContext(NavigationContext)
const [projectsData,setProjeData] = useContext(YourProjectsDataContext)
console.log(projectsData)

return (
<div>
<h2>All of your projects</h2>
<button onClick={()=>setCurrentPage(<Home/>)}>Go to main page</button>
</div>
);

}

export default YourProjects;
