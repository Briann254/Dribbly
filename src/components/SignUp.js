import React from 'react';
import { Link } from 'react-router-dom';
function SignUp(props) {
    function handleSubmit(e){
    e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id=""
          autoComplete="off"
          required
        />
        <input
          type="email"
          id=""
          autoComplete="off"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
        />
        <label htmlFor="username">Username</label>
        <Link to="/yourprojects">
        <button type="submit">Sign Up</button>
        </Link>
      </form>
    );
}
// onChange={(e) => setUser({...user, name: e.target.value })}
// onChange={(e) => setUser({...user, password: e.target.value })}
// onChange={(e) => setUser({...user, email: e.target.value })}
export default SignUp;