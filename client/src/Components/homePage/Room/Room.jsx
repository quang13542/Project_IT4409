import { useDispatch } from "react-redux";
import "./room.css";
import BeatLoader from 'react-spinners/BeatLoader';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRoomById } from "../../../API/rooms";

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
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
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
            const res = await getRoomById(params.room_id);

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

    useEffect(() => {
        getRoom();
    }, [params.id])
    console.log("selected: ", selectedRoom);
    console.log("id: ", params.room_id);
    console.log(typeof (selectedRoom.images))
    return loading ? (
        <div style={{textAlign:"center"}}>
            <BeatLoader color={'#2596be'} loading={loading} size={100} />
        </div>
    ) : (
        <div>
            <div className="roomContainer">
                {open && (
                    <div className="slider">
                        {/* <FontAwesomeIcon
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
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")}
                        /> */}
                    </div>
                )}
                <div className="roomWrapper">
                    {/* <button className="bookNow">Đặt trước hoặc Đặt ngay!</button> */}
                    {/* <h1 className="roomTitle">{selectedRoom.title}</h1>
                    <div className="roomAddress"> */}
                        {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                        {/* <span>HCM city </span> */}
                    {/* </div> */}
                    <div className="roomImages">
                        {selectedRoom.images?.map((photo, i) => (
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
                    {/* <span className="roomDistance">
                        Vị trí đắc địa – 500m từ trung tâm
                    </span>
                    <span className="roomPriceHighlight">
                        Đặt kỳ nghỉ trên ${selectedRoom.price} tại khách sạn này và nhận taxi sân bay miễn phí
                    </span> */}
                    
                    <div className="roomDetails">
                        <div className="roomDetailsTexts" style={{border:"rgb(221, 223, 226) solid grey", borderRadius:"10px"}}>
                            <h1 className="roomTitle">{selectedRoom.hotel_name}</h1>
                            <p className="roomDesc">
                                {selectedRoom.city_name}
                            </p>
                        </div>
                        <div className="roomDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b> {selectedRoom.price} </b> (9 nights)
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