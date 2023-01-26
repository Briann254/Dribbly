import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { NavigationContext } from './data/NavigationContext';
import {useContext} from 'react';
function App() {
  const [currentPage,setCurrentPage] = useContext(NavigationContext)
  return (
    <>
    {currentPage}
   </>
  );
}
export default App;
