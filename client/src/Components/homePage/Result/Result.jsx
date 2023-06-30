import React from "react";
import './result.css';
import { useSelector } from "react-redux";


const SearchList = ({ resultList }) => {
    const result = useSelector((state) => state.room);
    console.log("Kết quả nè", result);
    console.log("Kiểu biến", typeof (result));
    return (
        <>
            {result?.length >0 ? (
                <>
                    {result.map((room) => {
                        return (
                            <>
                                <div className="searchItem">

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
                                </div>
                            </>
                        )
                    }
                    )
                    }
                </>
            ) : (
                <h1 style={{margin:"5rem auto"}}>Không tồn tại phòng nào</h1>
            )}
        </>
    );
};

export default SearchList