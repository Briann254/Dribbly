import { createContext,useState } from "react";
import Home from "../components/Home";

//used context to fetch data from server and make it available to the whole page 
const NavigationContext = createContext()
const ProjectsProvider = (props) =>{
const [currentPage, setCurrentPage] = useState(<Home/>)


  //passed the state as the value to be used by the application
return(
<NavigationContext.Provider value={[currentPage, setCurrentPage]}>
{props.children}
</NavigationContext.Provider>
)
}

export {NavigationContext}
export {ProjectsProvider}
