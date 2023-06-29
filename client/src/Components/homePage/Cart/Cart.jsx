import React, { useState } from "react";
import "./cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar, faMapMarkerAlt, faXmark } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../../publicPage/Navbar/Navbar";
const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCheckboxChange = (event, price) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
        } else {
            setTotalPrice((prevTotalPrice) => prevTotalPrice - price);
        }
    };
    const hotelImage = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/85/a8/6c/aira-boutique-hanoi-hotel.jpg?w=1200&h=-1&s=1"
    const item = "hotel"; // Define the value of the item variable

    return (
        <>
            <div className="app-container">
                <div className="left-section">
                <div className="rectangle" key={item}>
                        <div className="rectangle-top">
                            <div className="hotel-info">
                                <img src={hotelImage} alt="Hotel" className="hotelImage" />
                                <div className="contentMax">
                                    <div className="hotel-details">
                                        <h4 className="hotel-title">Khách sạn ABCSCA</h4>
                                        <div className="star-rating">
                                            {[...Array(5)].map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} color="#fcbda1" className="star-icon" />
                                            ))}
                                        </div>
                                        <div className="location">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                            <span>Địa chỉ Khách sạn</span>
                                        </div>
                                    </div>

                                    <FontAwesomeIcon icon={faXmark} size="20px" className="trash-icon" />

                                </div>
                            </div>
                            <div className="rectangle-bottom">
                                {/* <p className="item-info">Thông tin mặt hàng</p> */}
                                <p className="item-price">Giá tiền: 100000</p>
                                <div className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        value={10}
                                        onChange={(e) => handleCheckboxChange(e, 100000)}
                                        id={`checkbox-${item}`}
                                    />
                                    <label htmlFor={`checkbox-${item}`} className="checkBox">Chọn để thanh toán</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="rectangle" key={item}>
                        <div className="rectangle-top">
                            <div className="hotel-info">
                                <img src={hotelImage} alt="Hotel" className="hotelImage" />
                                <div className="contentMax">
                                    <div className="hotel-details">
                                        <h4 className="hotel-title">Khách sạn ABCSCA</h4>
                                        <div className="star-rating">
                                            {[...Array(5)].map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} color="#fcbda1" className="star-icon" />
                                            ))}
                                        </div>
                                        <div className="location">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                            <span>Địa chỉ Khách sạn</span>
                                        </div>
                                    </div>

                                    <FontAwesomeIcon icon={faXmark} size="20px" className="trash-icon" />

                                </div>
                            </div>
                            <div className="rectangle-bottom">
                                {/* <p className="item-info">Thông tin mặt hàng</p> */}
                                <p className="item-price">Giá tiền: 100000</p>
                                <div className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        value={10}
                                        onChange={(e) => handleCheckboxChange(e, 100000)}
                                        id={`checkbox-${item}`}
                                    />
                                    <label htmlFor={`checkbox-${item}`} className="checkBox">Chọn để thanh toán</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="rectangle" key={item}>
                        <div className="rectangle-top">
                            <div className="hotel-info">
                                <img src={hotelImage} alt="Hotel" className="hotelImage" />
                                <div className="contentMax">
                                    <div className="hotel-details">
                                        <h4 className="hotel-title">Khách sạn ABCSCA</h4>
                                        <div className="star-rating">
                                            {[...Array(5)].map((_, index) => (
                                                <FontAwesomeIcon key={index} icon={faStar} color="#fcbda1" className="star-icon" />
                                            ))}
                                        </div>
                                        <div className="location">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                            <span>Địa chỉ Khách sạn</span>
                                        </div>
                                    </div>

                                    <FontAwesomeIcon icon={faXmark} size="20px" className="trash-icon" />

                                </div>
                            </div>
                            <div className="rectangle-bottom">
                                {/* <p className="item-info">Thông tin mặt hàng</p> */}
                                <p className="item-price">Giá tiền: 100000</p>
                                <div className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        value={10}
                                        onChange={(e) => handleCheckboxChange(e, 100000)}
                                        id={`checkbox-${item}`}
                                    />
                                    <label htmlFor={`checkbox-${item}`} className="checkBox">Chọn để thanh toán</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    



                </div>
                <div className="right-section">
                    <div className="total-price">
                        <h4 className="pen">Tổng hóa đơn:<p className="pen2">{totalPrice}VND</p> </h4>

                        <button className="paymentBtn">Thanh toán</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Cart;