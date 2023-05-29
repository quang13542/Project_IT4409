import React from "react"
import "./home.css"

const Home= () => {
    return (
        <section className="home">
             <div className="secContainer container">
                {/* <div className="homeText">
                    <h1 className="title">
                        hello
                    </h1>

                    <p className="subTitle">
                        lkasjdlkadj
                    </p>
                    <button className="btn">
                        <a href="#">Explore</a>
                    </button>
                </div> */}
                <div className="homeCard grid">
                    <div className="locationDiv">
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder="Destination"/>
                    </div>

                    <div className="timeDiv">
                        <label htmlFor="time">Time</label>
                        <input type="text" placeholder="Time"/>
                    </div>

                    <div className="peopleDiv">
                        <label htmlFor="location">People</label>
                        <input type="text" placeholder="People"/>
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="location">Price</label>
                        <input type="text" placeholder="Price"/>
                    </div>
                </div>
             </div>
        </section>
    )
}

export default Home