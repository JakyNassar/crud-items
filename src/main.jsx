import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import LogIn from './pages/LogIn.jsx'
import SignUp from './pages/SignUp.jsx'
import ListShow from './pages/ListShow.jsx'
import Root from './pages/Root.jsx'
import AddItem from './pages/AddItem.jsx'
import EditItem from './pages/EditItem.jsx'

 const routs=createBrowserRouter([
  {
    path:"/",
    element:<Auth/>,
    children:[
      {
        path:"",
        element:<LogIn/>,
        
      },
       {
        path:"/signup",
        element:<SignUp/>,
        
      }
    ]
  },{
    path:"/dashboard",
    element:<Root/>,
    children:[
      {
        path:"",
        element:<ListShow/>,  
        
      },
      {
        path:"additem",
        element:<AddItem/>,
        
      },
         {
        path:"edit/:id",
        element:<EditItem/>,
        
      }
    ]
  }

 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routs}>

    </RouterProvider>
  </StrictMode>,
)
