import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../API/api";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddNew from "../AddNew/AddNew";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max-content',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Datatable = ({ columns, getAll, del, update }) => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [list, setList] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getUsers = async () => {
        try {
            const res = await api.get(`${getAll}`);
            setList(res);
        } catch (err) {

        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await api.post(`${del}`, { user_id: id });
            setList(list.filter((item) => item.email !== "deleted_user"));
            alert("Đã xóa user:", {id});
        } catch (err) {
            alert(err);
        }
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                console.log(params.id);
                return (
                    <div className="cellAction">
                        <Link to={`/users/${params.row._id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Edit</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="mainContainer">
            <AdminNavbar />
            <div className="datatable">
                <div className="datatableTitle">
                    {path}
                    {/* <Link to={`/${path}/new`} className="link">
                        Add New
                    </Link> */}
                    <Button onClick={handleOpen} style={{ width: "max-content" }} >Add new</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {list.user_id ? (
                                <AddNew />
                            ):(
                                <h1>hqwhe</h1>
                            )}
                        </Box>
                    </Modal>

                </div>

                <div style={{ height: "70vh", width: '100%' }}>
                    <DataGrid
                        rows={list}
                        columns={columns.concat(actionColumn)}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        getRowId={(row) => row.user_id || row.room_id}
                    />
                </div>
            </div>
        </div>
    );
};

export default Datatable;