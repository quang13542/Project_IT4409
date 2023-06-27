import React, { useState } from "react"
import './navbar.css'
import { MdOutlineModeOfTravel } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../Redux/userSlice"

const Navbar = ({ bgColor }) => {
    const [active, setActive] = useState('navBar');
    const showNav = () => {
        setActive('navBar activeNavbar');
    }
    const user = useSelector((state) => state.user);
    const closeNav = () => {
        setActive('navBar');

    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [transparent, setTransparent] = useState('header');
    const addBackground = () => {
        if (window.scrollY >= 100) {
            setTransparent('header activeHeader')
        }
        else {
            setTransparent('header')
        }
    }
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        setTimeout(() => {
            navigate("/signin");
        }, 500);
    };
    window.addEventListener('scroll', addBackground)


    return (
        <section className="navBarSection">
            <div className={transparent}>

                <div className="logoDiv">
                    <Link to="/" className="logo">
                        <h1><MdOutlineModeOfTravel className="icon" />Cheap Trip</h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <Link to="/" className="navLink">Trang chủ</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/cart" className="navLink">Kế hoạch</Link>
                        </li>
                        {user && user.id ? (

                            <div className="navBtn">
                                <div>{user.username}</div>
                                <button className="btn loginBtn" onClick={handleLogout}>
                                    Đăng xuất
                                </button>
                            </div>

                        ) : (
                            <>
                                <div className="navBtn">
                                    <button className="btn">
                                        <Link to="/signin">Đăng nhập</Link>
                                    </button>
                                </div>
                                <div className="navBtn">
                                    <button className="btn" style={{marginLeft:"30px"}} >
                                        <Link to="/signup">Đăng ký</Link>
                                    </button>
                                </div>
                            </>
                        )}

                    </ul>
                    <div onClick={closeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </div>
        </section>
    )
}

export default Navbar