import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const YourProjectsDataContext = createContext();
const YourProjectsDataProvider = (props) => {
  const [projectsData, setProjeData] = useState([]);

  const baseUrl = "https://api.dribbble.com/v2/user/shots?access_token=";
  const accessToken =
    "4d66290d1ae13706dab6b0b398ff3d5312f85e90d8e495566fc8675ac8027f2f";

  useEffect(() => {
    axios.get(`${baseUrl}${accessToken}`).then((r) => setProjeData(r.data));
  }, []);
  console.log(setProjeData);

  return (
    <YourProjectsDataContext.Provider value={[projectsData, setProjeData]}>
      {props.children}
    </YourProjectsDataContext.Provider>
  );
};

export { YourProjectsDataContext };
export { YourProjectsDataProvider };
