import React, { useState } from "react"
import "./home.scss"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { getAllRooms } from "../../../API/rooms"
import { useSelector } from "react-redux"

const Home = () => {
    const [openDiv, setOpenDiv] = useState(false);
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    const [city, setCity] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    let placeholder = `${adult} người lớn - ${children} trẻ em`
    const toggleDiv = () => {
        setOpenDiv(!openDiv);
    }
    const filter = {
        city: city,
        checkin: checkin,
        checkout: checkout,
        adults: adult,
        children: children,
        duty: true,
    }
    const [roomList, setRoomList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [page, setPage] = useState(1);
    const user = useSelector((state) => state.user);
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await getAllRooms(filter);
            console.log(">>check resulst search:", res);
            // if(res.status === "success") {
            setRoomList(res);
            // }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }



    console.log(roomList);

    return (
        <section className="home">
            <div className="homeContainer">
                <div className="homeText">
                    {user && user.id ? (
                        <h1 className="title">
                            Chào mừng {user.username}, hãy bắt đầu kỳ nghỉ của bạn!
                        </h1>
                    ) : (
                        <h1 className="title">
                            Khách sạn, homestay, khu nghỉ dưỡng & hơn thế nữa
                        </h1>
                    )}


                </div>
                <form className="homeCard grid" onSubmit={handleSearch}>
                    <div className="locationDiv">
                        <input type="text" placeholder="Địa điểm" />
                    </div>
                    <div className="flex">
                        <div className="timeDiv">
                            <input type="datetime-local" />
                        </div>
                        <div>
                            <AiOutlineArrowRight className="icon" />
                        </div>
                        <div className="timeDiv">
                            <input type="datetime-local" />
                        </div>
                    </div>

                    <div>
                        <div className="peopleDiv">
                            <input type="dropdown" placeholder={placeholder} />
                            <FontAwesomeIcon icon={faArrowDown} className="drop-icon" onClick={toggleDiv} />

                            {openDiv &&
                                <div className="dropItem">
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <p>Adult</p>
                                        <input type="number" min={0} value={adult} onChange={e => setAdult(e.target.value)} />

                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <p>Children</p>
                                        <input type="number" min={0} value={children} onChange={e => setChildren(e.target.value)} />
                                    </div>
                                </div>}
                        </div>

                    </div>

                    <button className="btn" type="submit">
                        <Link to={"/result"}>
                            <a>Tìm</a>
                        </Link>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Home