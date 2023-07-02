import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import App from './App';
import App from './App';
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';
import ImageLooker from './pages/ImageLooker';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/form",
    element:<Form/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/looker",
    element:<ImageLooker/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
 
