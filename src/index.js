import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ProjectsProvider} from "./data/NavigationContext"
import { YourProjectsDataProvider } from './data/YourProjectsContext';
import { UserProvider } from './data/UserContext';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <YourProjectsDataProvider>
   <ProjectsProvider>
    <UserProvider>
    <App />
    </UserProvider>
    </ProjectsProvider>
    </YourProjectsDataProvider>
  </React.StrictMode>
);
