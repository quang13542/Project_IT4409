import React from "react";
import './popular.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">Chỗ nghỉ nổi bật</h2>
                        <p>
                            Những điểm đến thu hút khách du lịch tại Việt Nam
                        </p>

                    </div>

                    <div className="iconDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon rightIcon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    <div className="singleDes">
                        <div className="desImg">
                            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg" alt="" />

                            <div className="overlayInfo">
                                <h3>Đà Nẵng</h3>
                            </div>
                        </div>

                        {/* <div className="desFooter">
                            <div className="number">
                                01
                            </div>

                            <div className="desText flex">
                                <h6>
                                    Đà Nẵng
                                </h6>
                                <span className="flex">
                                    <span className="dot">
                                        <BsDot className="icon" />
                                    </span>
                                </span>
                            </div>
                        </div> */}
                    </div>
                   
                </div>
            </div>


        </section>
    )
}
export default Popular;