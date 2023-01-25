// import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";

const YourProjectsDataContext = createContext()
const YourProjectsDataProvider = (props) =>{
const [projectsData,setProjeData] = useState([])

return(
<YourProjectsDataContext.Provider value={[projectsData, setProjeData]}>
{props.children}
</YourProjectsDataContext.Provider>
)

}

export {YourProjectsDataContext}
export {YourProjectsDataProvider}