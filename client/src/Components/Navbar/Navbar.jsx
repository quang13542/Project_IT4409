import React, {useState} from "react"
import './navbar.css'
import { MdOutlineModeOfTravel } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNav = () => {
        setActive('navBar activeNavbar');
    }
    const closeNav= () => {
        setActive('navBar');

    }
    
    const[transparent, setTransparent] =useState('header');
    const addBackground= () =>{
        if(window.scrollY >=100) {
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }

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
                            <a href="#" className="navLink">Kế hoạch</a>
                        </li>
                        <div className="navBtn">
                            <button className="btn loginBtn">
                                <Link to="/signin">Đăng nhập</Link>
                            </button>
                            <button className="btn">
                                <Link to="/signup">Đăng ký</Link>
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