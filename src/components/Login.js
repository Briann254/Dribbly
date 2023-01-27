import { useRef, useState, useEffect, } from 'react'
import axios from 'axios';

const Login = () =>{
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] =useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [posts, setPosts] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(()=> {

  }, [])

  useEffect(()=> {
    let accessToken = "4d66290d1ae13706dab6b0b398ff3d5312f85e90d8e495566fc8675ac8027f2f"
    axios.get('https://api.dribbble.com/v2/user?access_token='+ accessToken)
    .then(res => setPosts(res.data))
    
    .catch(err =>{console.log(err)})
    }, [])
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      setUser('');
      setPwd('');
      setSuccess(true)
      
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
             <ul>
              {
                
              }
             </ul>

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
          <button>Sign Up</button>
        </span>
      </p>
    </section>
        )}
        </>
  )
}



export default Login;