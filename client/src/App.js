import React from 'react'
import './app.css'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'


const App = () => {
    return (
        
        <div>
            <Navbar/>
            <Home/>
            <Popular/>
            <Offer/>
        </div>
    )
}

export default App