import React, { useState } from "react"
import './navbar.scss'
import { MdOutlineModeOfTravel } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../Redux/userSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
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
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

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
                        <li className="navItem cart">
                            <Link to="/cart" className="navLink">Kế hoạch</Link>
                            <div className="cartAmount">3</div>
                        </li>
                        {user && user.id ? (

                            <>
                                <div className="toggleDiv">
                                    <div className="userBtn" onClick={toggleOpen}>
                                        <FontAwesomeIcon icon={faUser} className="location-icon" />
                                    </div>
                                    {open && (
                                    <div className="signoutDiv" onMouseLeave={toggleOpen} >
                                        <h3 className="userName">{user.role}: {user.username}</h3>
                                        <h3 className="optionDiv">Sửa thông tin</h3>
                                        <h3 className="optionDiv">Kế hoạch</h3>
                                        <h3 className="optionDiv" onClick={handleLogout}>Đăng xuất</h3>
                                    </div>
                                )}
                                </div>
                                
                            </>

                        ) : (
                            <>
                                <div className="navBtn">
                                    <button className="btn">
                                        <Link to="/signin">Đăng nhập</Link>
                                    </button>
                                </div>
                                <div className="navBtn">
                                    <button className="btn" style={{ marginLeft: "30px" }} >
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