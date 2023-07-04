// import Navbar from "../../components/navbar/Navbar";
import "./admin.scss";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Datatable from "../Datatable/Datatable";
import { roomColumns, userColumns } from "../ColumnsNameSRC";

const Admin = () => {
    return (
        <div className="admin">
            <AdminNavbar />

            <div className="adminContainer">
                Controller here
            </div>
        </div>
    );
};

export default Admin;