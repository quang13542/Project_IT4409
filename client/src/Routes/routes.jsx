import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Error404 from "../Components/public/Error404";
import Error403 from "../Components/public/Error403";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Signin from "../Components/Signin/Signin";
import Signup from "../Components/Signup/Signup";
import Footer from "../Components/Footer/Footer";
import Feature from "../Components/Feature/Feature";

const ProtectedRoute = ({ children, roles }) => {
    const user = useSelector((state) => state.user);
    console.log('user: ', user);
    if (user.id) {
        if (roles && !roles.includes(user.role))
            return <Navigate to="/403" replace />;
        return children;
    }
    alert("Vui lòng đăng nhập để truy cập trang này");
    return <Navigate to="/signin" replace />;
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Error404 />} />
            <Route path="/403" element={<Error403 />} />
            <Route
                path="/"
                element={
                    <>
                        <Navbar />
                        <Home />
                        <Feature/>
                        {/* <Footer /> */}
                    </>
                }
            />
            <Route
                path="/signin"
                element={
                    <>
                        <Navbar />
                        <Signin />
                    </>
                }
            />
            <Route path="/signup"
                element={
                    <>
                        <Navbar />
                        <Signup />
                    </>
                } />
           
                    </Routes>
    )
}

            export default AppRoutes