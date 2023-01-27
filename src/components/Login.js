import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../data/UserContext";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [signUp,setSignUp] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleSubmit =(e) => {
    e.preventDefault();
    setUser({...signUp})
  };
  return (
    <>
        <section id="log-in">
          <p>{user.name}</p>
          <h1 id="sign"> Sign In</h1>
          <form onSubmit={handleSubmit} id='sign-in'>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id=""
              autoComplete="off"
              onChange={(e) => setSignUp({...signUp, name: e.target.value })}
              required
            />
              <label htmlFor="email">Enter email</label>
            <input
              type="email"
              id=""
              autoComplete="off"
              onChange={(e) => setSignUp({...signUp, email: e.target.value })}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setSignUp({...signUp, password: e.target.value })}
              required
            />
          
            <Link to="/yourprojects">
            <button type="submit">Sign in</button> 
            </Link>
          </form>
        </section>
    </>
  );
};

export default Login;
