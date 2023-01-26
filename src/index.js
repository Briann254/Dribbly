import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ProjectsProvider} from "./data/NavigationContext"
import { YourProjectsDataProvider } from './data/YourProjectsContext';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <YourProjectsDataProvider>
   <ProjectsProvider>
    <App />
    </ProjectsProvider>
    </YourProjectsDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
