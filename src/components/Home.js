import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


function Home() {
    const [username, setUsername] = useState('');
    return (
      <div>
        <h1>Welcome to Dribbly</h1>
        <p>Hello, {username}</p>
        <form>
          <label>
            Name:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

export default Home