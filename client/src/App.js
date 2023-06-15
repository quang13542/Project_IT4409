import React from 'react'
import './app.css'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './Routes/routes'
import { Provider } from 'react-redux'
import {store} from './Redux/store';

const App = () => {
    
    return (
        <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
        </Provider>
    )
}

export default App