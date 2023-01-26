import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { YourProjectsDataContext } from '../data/YourProjectsContext';

function ViewProject(props){
  const [projectsData,setProjeData] = useContext(YourProjectsDataContext)
  const [projectName, setProjectName] = useState('');
  const [page,setPage] = useState(<><p>Loading</p></>)
  console.log(projectsData)

    useEffect(()=>{
      setPage(projectsData.map((project) =>{
        return (
          <div>
          <h2>{project.title}</h2>
        <img key={project.id}src={project.images.normal}></img>
        <p>{project.description.replace(/[<p></p>]/,"")}</p>
              </div>
        )
      },[]))
      
    },[projectsData])
  return (
    <div>
      {page}
    
    </div>
  );
};

export default ViewProject;