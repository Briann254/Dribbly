import { createContext } from "react";
import { useState } from "react";

//used context to fetch data from server and make it available to the whole page 
const UserContext = createContext();
const UserProvider = (props) => {
  const [user, setUser] = useState({});

  //passed the state as the value to be used by the application
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext };
export { UserProvider };
