import React from "react"
import "./home.css"
import { AiOutlineArrowRight } from 'react-icons/ai'
const Home = () => {
    return (
        <section className="home">
            <div className="homeContainer container">
                <div className="homeText">
                    <h1 className="title">
                        Khách sạn, homestay, khu nghỉ dưỡng & hơn thế nữa
                    </h1>

                  
                </div>
                <div className="homeCard grid">
                    <div className="locationDiv">
                        <input type="text" placeholder="Nhập điểm du lịch hoặc tên khách sạn" />
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
                        <input type="text" placeholder="People" />
                    </div>
                    <button className="btn">
                        <a href="#">Tìm</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home