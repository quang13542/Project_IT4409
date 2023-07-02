import React from 'react';
import SideBar from '../SideBar/SideBar';
import "./adminHome.scss"
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Table from "../Table/Table"
const AdminHome = () => {
    return (
        <>
            <div className="adminContainer">
                <SideBar />

                <div className="adminController">
                    <AdminNavbar />
                    <Table/>
                </div>

            </div>
        </>
    )
}


export default AdminHome;