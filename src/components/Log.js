import { useRef, useState, useEffect } from 'react'
const Log = () =>{
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] =useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=> {

  }, [])

  useEffect(() => {

  }, [user, pwd])
  
  return (
    <section>
      <p ref={errRef} className={errMsg}></p>
      <h1> Sign In</h1>
      <form>
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
      </form>
    </section>
  )
}

export default Log;