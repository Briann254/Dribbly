import './App.css';
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
