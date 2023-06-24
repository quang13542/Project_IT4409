import React, { useState } from "react";
import "./cart.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faStar, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
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
    const hotelImage = ""
    const item = "hotel"; // Define the value of the item variable

    return (
        <div className="app-container">
            <div className="left-section">
                <div className="rectangle" key={item}>
                    <div className="rectangle-top">
                        <div className="hotel-info">
                            <img src={hotelImage} alt="Hotel" className="hotelImage" />
                            <div className="contentMax">
                                <div className="hotel-details">
                                    <h3 className="hotel-title">Thông tin Khách sạn</h3>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                                        ))}
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                        <p className="location-name">Tên vị trí</p>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className="hotel-title trash-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-bottom">
                        <p className="item-info">Thông tin mặt hàng</p>
                        <p className="item-price">Giá tiền: $10</p>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                value={10}
                                onChange={(e) => handleCheckboxChange(e, 10)}
                                id={`checkbox-${item}`}
                            />
                            <label htmlFor={`checkbox-${item}`}>Điều kiện của khách sạn</label>
                        </div>
                    </div>
                </div>
                <div className="rectangle" key={item}>
                    <div className="rectangle-top">
                        <div className="hotel-info">
                            <img src={hotelImage} alt="Hotel" className="hotelImage" />
                            <div className="contentMax">
                                <div className="hotel-details">
                                    <h3 className="hotel-title">Thông tin Khách sạn</h3>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                                        ))}
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                        <p className="location-name">Tên vị trí</p>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className="hotel-title trash-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-bottom">
                        <p className="item-info">Thông tin mặt hàng</p>
                        <p className="item-price">Giá tiền: $10</p>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                value={10}
                                onChange={(e) => handleCheckboxChange(e, 10)}
                                id={`checkbox-${item}`}
                            />
                            <label htmlFor={`checkbox-${item}`}>Điều kiện của khách sạn</label>
                        </div>
                    </div>
                </div>
                <div className="rectangle" key={item}>
                    <div className="rectangle-top">
                        <div className="hotel-info">
                            <img src={hotelImage} alt="Hotel" className="hotelImage" />
                            <div className="contentMax">
                                <div className="hotel-details">
                                    <h3 className="hotel-title">Thông tin Khách sạn</h3>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                                        ))}
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                        <p className="location-name">Tên vị trí</p>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className="hotel-title trash-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-bottom">
                        <p className="item-info">Thông tin mặt hàng</p>
                        <p className="item-price">Giá tiền: $10</p>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                value={10}
                                onChange={(e) => handleCheckboxChange(e, 10)}
                                id={`checkbox-${item}`}
                            />
                            <label htmlFor={`checkbox-${item}`}>Điều kiện của khách sạn</label>
                        </div>
                    </div>
                </div>
                <div className="rectangle" key={item}>
                    <div className="rectangle-top">
                        <div className="hotel-info">
                            <img src={hotelImage} alt="Hotel" className="hotelImage" />
                            <div className="contentMax">
                                <div className="hotel-details">
                                    <h3 className="hotel-title">Thông tin Khách sạn</h3>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                                        ))}
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                        <p className="location-name">Tên vị trí</p>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className="hotel-title trash-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-bottom">
                        <p className="item-info">Thông tin mặt hàng</p>
                        <p className="item-price">Giá tiền: $10</p>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                value={10}
                                onChange={(e) => handleCheckboxChange(e, 10)}
                                id={`checkbox-${item}`}
                            />
                            <label htmlFor={`checkbox-${item}`}>Điều kiện của khách sạn</label>
                        </div>
                    </div>
                </div>
                <div className="rectangle" key={item}>
                    <div className="rectangle-top">
                        <div className="hotel-info">
                            <img src={hotelImage} alt="Hotel" className="hotelImage" />
                            <div className="contentMax">
                                <div className="hotel-details">
                                    <h3 className="hotel-title">Thông tin Khách sạn</h3>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                                        ))}
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                        <p className="location-name">Tên vị trí</p>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className="hotel-title trash-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-bottom">
                        <p className="item-info">Thông tin mặt hàng</p>
                        <p className="item-price">Giá tiền: $10</p>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                value={10}
                                onChange={(e) => handleCheckboxChange(e, 10)}
                                id={`checkbox-${item}`}
                            />
                            <label htmlFor={`checkbox-${item}`}>Điều kiện của khách sạn</label>
                        </div>
                    </div>
                </div>
                <div className="rectangle" key={item}>
                    <div className="rectangle-top">
                        <div className="hotel-info">
                            <img src={hotelImage} alt="Hotel" className="hotelImage" />
                            <div className="contentMax">
                                <div className="hotel-details">
                                    <h3 className="hotel-title">Thông tin Khách sạn</h3>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                                        ))}
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                        <p className="location-name">Tên vị trí</p>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className="hotel-title trash-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-bottom">
                        <p className="item-info">Thông tin mặt hàng</p>
                        <p className="item-price">Giá tiền: $10</p>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                value={10}
                                onChange={(e) => handleCheckboxChange(e, 10)}
                                id={`checkbox-${item}`}
                            />
                            <label htmlFor={`checkbox-${item}`}>Điều kiện của khách sạn</label>
                        </div>
                    </div>
                </div>


            </div>
            <div className="right-section">
                <div className="total-price">
                    <h3 className="pen">Tổng giá tiền:<p className="pen2">{totalPrice}$</p> </h3>

                    <button className="">CONTINUE</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;