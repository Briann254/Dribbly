import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { YourProjectsDataContext } from '../data/YourProjectsContext';
import DeletePosts from './DeletePosts'
import UpdateYourProject from './UpdateYourProject';

function ViewProject(props){
  // passing context that holds the data
  const [projectsData,setProjeData] = useContext(YourProjectsDataContext)
  const [page,setPage] = useState(<><p>Loading</p></>)
  const [display, setDisplay] = useState(true)
  console.log(projectsData)

  // to set display to false
  function changeDisplay(value){
    setDisplay(value)
  } 

  // to map through th data and return the images, titles and descriptions
  // uses if else statement for a user when they click the image to display the update form and delete button else to display just the image, description, title, delete button and update button
    useEffect(()=>{
     display ?
      setPage(projectsData.map((project) =>{

        return (
          <div className='display-items' >
            
          <h2>{project.title}</h2>
        <img key={project.id}src={project.images.normal} onClick={()=> {setDisplay(!display)}}  className="create-image"></img>
        <p>{project.description.replace(/[<p/>h1]/g,"")}</p>
        <DeletePosts singleShot= {project}  changeDisplay={changeDisplay} />
        <button onClick={()=> {setDisplay(!display)}}>Update</button>
              </div>
              
        )
      },))
      :
      setPage(projectsData.map((project) =>{

        return (
          <div className='display-items' >
          <h2>{project.title}</h2>
        <img key={project.id}src={project.images.normal} onClick={()=> {setDisplay(true)}}></img>
        <p>{project.description.replace(/[<p/>h1]/g,"")}</p>
        <DeletePosts singleShot= {project}  changeDisplay={changeDisplay} />
        <UpdateYourProject singleShot={project} changeDisplay={changeDisplay}/>
        </div>        
        )
      },))
      
    },[projectsData, display])
  return (
    <div className='img'>
      {page}
    
    </div>
  );
};

export default ViewProject;