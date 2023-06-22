import React from "react"
import "./home.css"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <section className="home">
            <div className="homeContainer">
                <div className="homeText">
                    <h1 className="title">
                        Khách sạn, homestay, khu nghỉ dưỡng & hơn thế nữa
                    </h1>

                  
                </div>
                <div className="homeCard grid">
                    <div className="locationDiv">
                        <input type="text" placeholder="Địa điểm" />
                    </div>
                    <div className="flex">
                        <div className="timeDiv">
                            <input type="date" />
                        </div>
                        <div>
                            <AiOutlineArrowRight className="icon" />
                        </div>
                        <div className="timeDiv">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="peopleDiv">
                        <input type="dropdown" placeholder="Số lượng" />
                    </div>
                    <button className="btn">
                        <Link to={"/result"}>
                            <a>Tìm</a>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home