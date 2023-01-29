import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Layout/pages';
import YourProjects from './components/YourProjects';
import SignUp from './components/SignUp';
  function App() {
  return (
  <Router>
   <Routes>
   <Route exact path="/" element={<Home /> }/>
   <Route exact path="/yourprojects" element={<YourProjects/>}/>
   <Route exact path="/signup" element={<SignUp /> }/>
    </Routes>
  </Router>
  )
}
export default App;