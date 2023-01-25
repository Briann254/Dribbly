import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from "./context/AuthProvider"
import axios from './api/axios';
const LOGIN_URL = '/auth'

const Login = () =>{
  const { setAuth }= useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] =useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=> {

  }, [])

  useEffect(() => {
        setErrMsg('')
  }, [user, pwd])
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post
      } catch (err){

      }
      setSuccess(true)
      setPwd('');
      setSuccess(true);
  }
  return (
    <>
        {success ? (
          <section>
             <h1>You are successfully logged in</h1>
             <br />
             <p>
               Here is your profile
             </p>
          </section>
        ) : (
    <section>
      <p ref={errRef} className={errMsg}></p>
      <h1> Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor= "username">Username</label>
        <input 
                type="text"
                id="" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                />

<label htmlFor= "password">Password</label>
        <input 
                type="password"
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                />
                <button>Sign in</button>
      </form >
      <p>
        Want to join our community? <br />
        <span className="line">
          {/*put router link here*/}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
        )}
        </>
  )
}

export default Login;