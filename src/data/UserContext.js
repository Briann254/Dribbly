import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext };
export { UserProvider };
