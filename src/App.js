import Login from './components/SignUp';
import Logout from './components/Logout';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Layout/pages';
import YourProjects from './components/YourProjects';
import SignUp from './components/SignUp';
  function App() {
  return (
  <Router>
   <Routes>
   <Route exact path="/" element={<Home /> }/>
   <Route exact path="/yourprojects" element={<YourProjects/>}/>
   <Route exact path="/signup" element={<SignUp /> }/>
    <Route path="/logout" element={<Logout />}/>
    </Routes>
  </Router>
  )
}
export default App;