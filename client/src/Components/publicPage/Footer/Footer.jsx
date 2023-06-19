import React from "react"
import "./footer.css"
import { AiFillGithub } from "react-icons/ai"
const Footer = () => {
    return (
        <section className="footer">
            <div className="footerContainer container">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <a href="https://github.com/quang13542/Project_IT4409" target="_blank" className="logo">
                        <h1 className="flex"><AiFillGithub className="icon"/></h1>
                        </a>
                    </div>
                </div>
                <div className="footerInfo">
                    <span className="title">
                        Contact us:
                    </span>
                    <span className="phone">09847539433</span>
                    <span className="email">CheapTripService@gmail.com</span>
                </div>
            </div>
        </section>
    )
}

export default Footer