import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { YourProjectsDataContext } from '../data/YourProjectsContext';
import DeletePosts from './DeletePosts'
import UpdateYourProject from './UpdateYourProject';

function ViewProject(props){
  const [projectsData,setProjeData] = useContext(YourProjectsDataContext)
  const [projectName, setProjectName] = useState('');
  const [page,setPage] = useState(<><p>Loading</p></>)
  console.log(projectsData)

    useEffect(()=>{
      setPage(projectsData.map((project) =>{
        return (
          <div id='display-items'>
          <h2>{project.title}</h2>
        <img key={project.id}src={project.images.normal} ></img>
        <p>{project.description.replace(/[<p/>h1]/g,"")}</p>
        <DeletePosts singleShot= {project}/>
        <UpdateYourProject singleShot={project}/>

              </div>
              
        )
      },[]))
      
    },[projectsData])
  return (
    <div className='img'>
      {page}
    
    </div>
  );
};

export default ViewProject;