import React, { useEffect, useState } from 'react';
import './signin.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {

        console.log(email, password);
        const data = { email: email, password: password }
        axios.post('https://reqres.in/api/login', data)
            .then((res) => {
                console.log(res.data.token, 17);
                if (res.data.token) {
                    navigate("/");
                }
            })
            .catch((e) => {
                console.log(e)
            })
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
                    Đăng nhập
                </button>
                <div className='option'>
                    <h5><Link to="/signup">Tạo tài khoản</Link></h5>
                    <h5><Link to="#">Quên mật khẩu</Link></h5>
                </div>
            </form>

        </section>

    );
}

export default Signin;