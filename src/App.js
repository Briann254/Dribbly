import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
// import $ from "min-jquery";
import Navbar from './components/Navbar';
// import $ from 'jquery';
import axios from 'axios';


function App() {
  // Set the Access Token
let accessToken = "f66dc8ec428c6b17ccb802413df27deb5ca4b69da363e91c255e7c4d0b5899b2"
// Call Dribble v2 API
// 
const FetchData = () => {
  axios.get(`https://api.dribbble.com/v2/user/shots?access_token=` + accessToken)
  .then((resp) => console.log(resp.data))
}
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path='/' component={Home} />
    //   </Switch>
    // </Router>
    <>
   {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <div id="shots"></div>
    <Navbar />
     <Home />
    
 
    </>

  );
}

export default App;