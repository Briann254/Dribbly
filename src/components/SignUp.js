import React from 'react';


// function to handle submition of the users details
function SignUp(props) {
    function handleSubmit(e){
    }
    return (
      <>
         
        <form onSubmit={handleSubmit} action="/yourprojects" className='signup'>
        <h2 className='sign'>Sign Up</h2> 
        <label htmlFor="Enter Username">
        <input
          type="text"
          placeholder='Username'
          required
        />
        </label>   
        <label htmlFor="password">
        <input
          type="password"
          placeholder='Password'
          id="password"
          required
        />
        </label>      
        <label htmlFor="email">
        <input
          type="email"
          placeholder='email'
          id=""
          autoComplete="off"
          required
        />
        </label>
           
        <button type="submit">Sign Up</button>   
      </form>
    </>
    );
}

export default SignUp;