import React from 'react'
import './app.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './Routes/routes'


const App = () => {
    return (

        // <div className='app'>
        //     <div className='app-header'>
        //         <Navbar />
        //     </div>
        //     <div className='app-body'>
        //         <Outlet></Outlet>
        //         {/* <Home />
        //         <Popular /> */}
        //     </div>

        // </div>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

export default App