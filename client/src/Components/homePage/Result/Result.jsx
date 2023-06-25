import React from "react";
import './result.css';


const SearchItem = ({ resultList }) => {
    return (
        <div className="searchItem">
            {resultList && resultList.length > 0 ? (
                <>
                    {resultList.map((room) => {
                        <>
                            <img src="" alt="" className="siImg" />
                            <div className="siDesc">
                                <h1 className="siTitle">{room.hotel_name}</h1>
                                <span className="siDistance">{room.city_name}</span>
                                <span className="taxi0p">co taxi</span>
                                <span className="siSubtitle">
                                    {room.number_of_adults} nguời lớn
                                </span>
                                <span className="siFeatures">
                                    {room.number_of_children} trẻ em
                                </span>
                                <span className="siCancel0p">Huy mien phi</span>
                                <span className="siCancel0pSubtitle">
                                    Ban co th huy phong
                                </span>

                            </div>
                            <div className="siDetails">
                                <div className="siRating">
                                    <span className="Excellent">Excellent</span>
                                    <button>{room.rating_hotel}</button>
                                </div>
                                <div className="siDetailTexts">
                                    <span className="siPrice">3.000.000đ</span>
                                    <span className="siTaxi0p">Đã bao gồm phí Taxi</span>
                                    <button className="siCheckButton">Xem thêm</button>

                                </div>
                            </div>
                        </>
                    })}
                </>
            ) : (
                <h1>Không tồn tại phòng nào</h1>
            )}
        </div>
    );
};

export default SearchItem