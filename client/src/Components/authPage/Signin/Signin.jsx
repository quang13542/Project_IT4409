import React, { useEffect, useState } from 'react';
import './signin.scss';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../../API/users';
import { useDispatch } from 'react-redux';
import { loginRedux } from '../../../Redux/userSlice';
import ClipLoader from 'react-spinners/ClipLoader';
function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = { email: email, password: password };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const result = await login({ email: email, password: password });
            console.log(result);
            if (result.msg === "Success") {
                dispatch(loginRedux(result.user));
                navigate("/");
            } 


        } catch (error) {
            alert("Tài khoản không tồn tại hoặc mật khẩu sai");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="signin">

            <form
                className="signinContainer grid"
                onSubmit={handleLogin}
            >
                <h1 className='title'>Đăng nhập</h1>
                <div className="emailDiv">
                    <input
                        type="email"
                        placeholder='email'
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="passwordDiv">
                    <input
                        type="password"
                        placeholder='password'
                        id="username"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='btn' type='submit'>
                    {loading ? (
                        <ClipLoader
                            color='#ffffff'
                            loading={loading}
                            size={15}
                        />
                    ) : (
                        <>
                            Đăng nhập
                        </>
                    )}
                </button>
                <div className='option'>
                    <h5>Chưa có tài khoản? <Link to="/signup">Tạo tài khoản</Link></h5>
                    <h5><Link to="#">Quên mật khẩu</Link></h5>
                </div>
            </form>

        </section>

    );
}

export default Signin;