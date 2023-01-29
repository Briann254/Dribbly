import React from 'react';


// function to handle submition of the users details
function SignUp(props) {
    function handleSubmit(e){
    }
    return (
        <form onSubmit={handleSubmit} action="/yourprojects">
        <label htmlFor="username">
          Username:
        <input
          type="text"
          id=""
          autoComplete="off"
          required
        />
        </label>
        <label htmlFor="email">
          email:
        <input
          type="email"
          id=""
          autoComplete="off"
          required
        />
        </label>
        <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          required
        />
        </label>       
        <button type="submit">Sign Up</button>
       
      </form>
    );
}

export default SignUp;