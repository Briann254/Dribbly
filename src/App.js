import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Layout/pages';



import { NavigationContext } from './data/NavigationContext';
import {useContext} from 'react';
function App() {
  const [currentPage,setCurrentPage] = useContext(NavigationContext)
  return (
	<Router>
		 {currentPage}
		<Home />
	</Router>
  )
   
}
export default App;
