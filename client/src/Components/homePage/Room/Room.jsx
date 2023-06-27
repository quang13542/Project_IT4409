import { useDispatch } from "react-redux";
import "./room.css";
import BeatLoader from 'react-spinners/BeatLoader';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRoomById } from "../../../API/rooms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom, faDoorOpen, faLocationDot, faRankingStar, faStar, faWifi, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
const Room = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 2 : slideNumber - 1;
        } else if (direction === "r") {
            newSlideNumber = slideNumber === 2 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };
    const [selectedRoom, setSelectedRoom] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();

    const getRoom = async () => {
        try {
            setLoading(true);
            const res = await getRoomById(params.id);

            // if (res.status === "success") {
            setSelectedRoom(res);
            //suggestion go here
            //...
            ///

            // }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const renderDivs = (count) => {
        count = Math.floor(count);
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} style={{ color: "#d1002a", }} />);
        }
        return stars;
    };
    const formatPrice = (price) => {
        const formattedPrice = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const currencySymbol = formattedPrice + " VND";
        return currencySymbol;
    }
    useEffect(() => {
        getRoom();
    }, [params.id])
    const dummyImg = [
        `${selectedRoom.url}`,
        "https://www.perlentravel.com/photos/29-2-ArenaBeachHotelatMaafushiDeluxeDoubleRoomwithBalconyandSeaViewDoubleRoomwithBalconyandSeaview-bad232a2e4b3a631d6f3ec13ac56e9ba4-med.jpg",
        "https://www.marmomac.com/wp-content/uploads/2020/12/Ritz-Carlton-bathroom-1.jpeg",
    ]

    return loading ? (
        <div style={{ textAlign: "center" }}>
            <BeatLoader color={'#2596be'} loading={loading} size={100} />
        </div>
    ) : (
        <div>
            <div className="roomContainer">
                {open && (
                    <div className="slider">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="close"
                            onClick={() => setOpen(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={() => handleMove("l")}
                        />
                        <div className="sliderWrapper">
                            <img src={dummyImg[slideNumber]} alt="ảnh vippro" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                <div className="roomWrapper">
                    <div className="roomImages">
                        {dummyImg?.map((photo, i) => (
                            <div className="roomImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo}
                                    alt=""
                                    className="roomImg"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="roomDetails">
                        <div className="roomTextDiv">
                            <div className="roomDetailsTexts">
                                <h1 className="roomTitle" >{selectedRoom.hotel_name} <small>{renderDivs(selectedRoom.rating_hotel)}</small></h1>
                                <h3 className="roomLoc">
                                    Phạm Hùng, Mễ Trì, Nam Từ Liêm, {selectedRoom.city_name}
                                </h3>
                                <p className="roomDetail">{selectedRoom.position_detail}</p>
                                <h5 style={{ marginTop: "5px" }}>
                                    Rating: {selectedRoom.rating_hotel}
                                </h5>
                                <h5 style={{ marginTop: "5px" }}>
                                    Số lượng: {selectedRoom.number_of_adults} người lớn - {selectedRoom.number_of_children} trẻ em
                                </h5>
                            </div>
                            <div className="roomDetailsTexts" style={{ marginTop: "20px" }}>
                                <h5 className="roomTitle">Đặc điểm nổi bật</h5>
                                <h3 className="serviceIcon" style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
                                    <div className="service" style={{ textAlign: "center" }}>
                                        <FontAwesomeIcon icon={faWifi} style={{ color: "#3884b2", }} />
                                        <h5>Wifi</h5>
                                    </div>
                                    <div className="service" style={{ textAlign: "center" }}>
                                        <FontAwesomeIcon icon={faDoorOpen} style={{ color: "#1f901d", }} />
                                        <h5>Nhận phòng trong 24h</h5>
                                    </div>
                                    <div className="service" style={{ textAlign: "center" }}>
                                        <FontAwesomeIcon icon={faBroom} style={{ color: "#a11b1b", }} />
                                        <h5>Sạch bóng</h5>
                                    </div>
                                    <div className="service" style={{ textAlign: "center" }}>
                                        <FontAwesomeIcon icon={faRankingStar} style={{ color: "#9a950e", }} />
                                        <h5>Rating cao</h5>
                                    </div>
                                    <div className="service" style={{ textAlign: "center" }}>
                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#295794", }} />
                                        <h5>Trung tâm</h5>
                                    </div>

                                </h3>
                            </div>
                        </div>
                        <div className="roomDetailsPrice">
                            <h1>Đặt phòng ngay!</h1>
                            <h2>
                                <b> {formatPrice(selectedRoom.price)}</b>
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room;