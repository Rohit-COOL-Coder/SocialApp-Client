import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./component/profile/Profile";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./component/home/Home"
import { Children } from "react";
import Layout from "./pages/layout/Layout";
const route=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
     {
      path:"/",
      element:<Home/>
     },
     {
      path:"/profile/:id",
      element:<Profile/>
     }

    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={route}/>
    </>
    
  );
}

export default App;
