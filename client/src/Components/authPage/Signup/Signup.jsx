import React, { useState } from 'react';
import './signup.scss';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../../API/users';
import ClipLoader from 'react-spinners/ClipLoader';

function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [role, setRole] =useState("user");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password1) {
            alert("Nhập lại mật khẩu chưa chính xác");
            return;
        }
        const formData = {
            username:username,
            email: email,
            password1: password,
            role:role
        }
        console.log(formData);
        try {
            setLoading(true);
            const result = await createUser(formData);
            // console.log(result);
            // if (result.success) {
            alert("Tạo tài khoản thành công");
            navigate('/signin')
            // }
        } catch (error) {
            console.log(error);
            alert(error.errMessage )
        } finally {
            setLoading(false);
        }
    }



    return (
        <div>
            <div>
                <section className="signup">
                    <form className="signupContainer grid" onSubmit={handleSubmit}>
                        <h1 className='title'>Đăng ký</h1>
                        <div className="usernameDiv">
                            <input
                                type="text"
                                name="name"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                                required
                            />
                        </div>
                        <div className="emailDiv">
                            <input
                                type="email"
                                name="email"
                                placeholder="eve.holt@reqres.in"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                required
                            />
                        </div>
                        <div className="passwordDiv">
                            <input
                                type="password"
                                placeholder='Mật khẩu'
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        <div className="passwordDiv">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={password1}
                                onChange={(e) => { setPassword1(e.target.value) }}
                                required
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
                                    Đăng ký
                                </>
                            )}
                        </button>
                        <div className='option'>
                            <h5>Đã có tài khoản? <Link to="/signin">Đăng nhập</Link></h5>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Signup;