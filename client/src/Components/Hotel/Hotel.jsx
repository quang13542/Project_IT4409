import "./hotel.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "...",
        },
        {
            src: "...",
        },
        {
            src: "...",
        },
        {
            src: "...",
        },
        {
            src: "...",
        },
        {
            src: "...",
        },
    ];

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

    return (
        <div>
            <Navbar />

            <div className="hotelContainer">
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
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">Đặt trước hoặc Đặt ngay!</button>
                    <h1 className="hotelTitle">Tower Street Apartments</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>HCM city </span>
                    </div>
                    <span className="hotelDistance">
                        Vị trí đắc địa – 500m từ trung tâm
                    </span>
                    <span className="hotelPriceHighlight">
                        Đặt kỳ nghỉ trên $114 tại khách sạn này và nhận taxi sân bay miễn phí
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of City</h1>
                            <p className="hotelDesc">
                                Tọa lạc chỉ cách Cổng Bến Thành ở thành phố Hồ Chí Minh 5 phút đi bộ, căn hộ tại Đường Tòa Nhà có điều hòa không khí và Wi-Fi miễn phí. Các đơn vị được trang bị sàn gỗ và đi kèm với khu vực bếp nhỏ đầy đủ tiện nghi với lò vi sóng, TV màn hình phẳng và phòng tắm riêng với vòi sen và máy sấy tóc. Ngoài ra, còn có tủ lạnh, ấm đun nước điện và máy pha cà phê. Những điểm tham quan phổ biến gần căn hộ bao gồm Chợ Bến Thành, Quảng trường Chính và Tháp Đồng Hồ Thành phố. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách Đường Tòa Nhà khoảng 16,1 km và chỗ nghỉ cung cấp dịch vụ đưa đón sân bay có tính phí.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b> 10000dd </b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;