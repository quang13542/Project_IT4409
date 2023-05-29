import React, {useState} from "react"
import './navbar.css'
import { MdOutlineModeOfTravel } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'


const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNav = () => {
        setActive('navBar activeNavbar');
    }
    const closeNav= () => {
        setActive('navBar');

    }

    return (
        <section className="navBarSection">
            <div className="header">

                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1><MdOutlineModeOfTravel className="icon" /></h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Product</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Promotion</a>
                        </li>
                        <div className="navBtn">
                            <button className="btn loginBtn">
                                <a href="#">Sign In</a>
                            </button>
                            <button className="btn">
                                <a href="#">Sign Up</a>
                            </button>
                        </div>

                    </ul>
                    <div onClick={closeNav}  className="closeNavbar">
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