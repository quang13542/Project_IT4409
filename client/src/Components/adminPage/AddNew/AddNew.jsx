import "./addNew.scss";
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../../API/users';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from "react";
const AddNew = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            username: username,
            email: email,
            password1: password,
            role: "user"
        }
        console.log(formData);
        try {
            setLoading(true);

            const result = await createUser(formData);
            // console.log(result);
            // if (result.success) {
            alert("Tạo tài khoản thành công");
            navigate('/users')
            // }
        } catch (error) {
            console.log(error);
            alert(error.errMessage)
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div>
                <div>
                    <section className="addnew">
                        <form className="addnewContainer grid" onSubmit={handleSubmit}>
                            <h1 className='title'>Tạo mới user</h1>
                            <div className="newUsername">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                    required
                                />
                            </div>
                            <div className="newEmail">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                />
                            </div>
                            <div className="newPassword">
                                <input
                                    type="password"
                                    placeholder='Mật khẩu'
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <button
                                className='btn'
                                type='submit'
                                onClick={(e) => handleSubmit(e)}
                            >
                                {loading ? (
                                    <ClipLoader
                                        color='#ffffff'
                                        loading={loading}
                                        size={15}
                                    />
                                ) : (
                                    <>
                                        Thêm mới
                                    </>
                                )}
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AddNew;