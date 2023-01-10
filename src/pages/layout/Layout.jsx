import React from 'react';
import "./layout.scss"
import {Outlet} from "react-router-dom"
import Navbar from "../../component/navbar/Navbar"
import Leftbar from "../../component/leftbar/Leftbar"
import Rightbar from "../../component/rightbar/Rightbar"
function Layout(props) {
    return (
        <div className='layout'>
           <Navbar/>
           <div className='layout-wrapper'>
              <Leftbar/>
              <Outlet />
              <Rightbar/>
           </div>
        </div>
    );
}

export default Layout;