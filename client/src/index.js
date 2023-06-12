import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <React.StrictMode>
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={<App />}>
    //                 <Route path="signin" element={<Signin />} />
    //                 <Route path="signup" element={<Signup />} />
    //                 <Route index element={<Home/>}/>
    //             </Route>


    //         </Routes>
    //     </BrowserRouter>
    // </React.StrictMode>
    <App/>
)