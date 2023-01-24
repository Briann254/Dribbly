import { createContext,useState } from "react";
import Home from "../components/Home";

const NavigationContext = createContext()

const ProjectsProvider = (props) =>{
const [currentPage, setCurrentPage] = useState(<Home/>)
return(
<NavigationContext.Provider value={[currentPage, setCurrentPage]}>
{props.children}
</NavigationContext.Provider>
)
}

export {NavigationContext}
export {ProjectsProvider}
