import Login from './components/Login';
import Logout from './components/Logout';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Layout/pages';
import YourProjects from './components/YourProjects';

  function App() {
  return (
	<Router>
    
   <Routes>
   <Route exact path="/" element={<Home /> }/>
    <Route path="/yourprojects" element={<YourProjects/>}/>
   
    </Routes>
    <main className="App">
      <Login />
      <Logout />
    </main>

	</Router>
  )
   
}
export default App;
