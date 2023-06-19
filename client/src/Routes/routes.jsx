import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Error404 from "../Components/publicPage/Error404";
import Error403 from "../Components/publicPage/Error403";
import Navbar from "../Components/publicPage/Navbar/Navbar";
import Home from "../Components/homePage/Home/Home";
import Feature from "../Components/homePage/Feature/Feature";
import Signin from "../Components/authPage/Signin/Signin";
import Signup from "../Components/authPage/Signup/Signup";
import RoomProp from "../Components/homePage/RoomProp/RoomProp";
import RoomList from "../Components/homePage/RoomList/RoomList";

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
                        <RoomProp/>
                        <RoomList/>
                        {/* <Footer /> */}
                    </>
                }
            />
            <Route
                path="/signin"
                element={
                    <>
                        <Navbar />
                        <Signin/>
                    </>
                }
            />
            <Route path="/signup"
                element={
                    <>
                        <Navbar />
                        <Signup/>
                    </>
                } />
           
                    </Routes>
    )
}

            export default AppRoutes