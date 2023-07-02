import React, { useEffect, useState } from "react";
import './result.css';
import { useNavigate } from "react-router";
import { filterRooms } from "../../../API/rooms";


const SearchList = ({ resultList }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = {
        city:urlParams.get('city') ,
        checkin:urlParams.get('checkin') || "2023-06-23T20:46",
        checkout:urlParams.get('checkout') || "2023-06-24T20:46",
        adults:urlParams.get('adults') || 0,
        children:urlParams.get('children') || 0,
        duty:urlParams.get('duty')

    }
    const [result, setResult] =useState([]);
    const getResultList = async () => {
        try {
            const res = await filterRooms(filter);
            console.log(">>check resulst search:", res);
            setResult(res);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getResultList();
    })
    console.log("filter:", filter);
    console.log("Kết quả nè", result);
    const formatPrice = (price) => {
        const formattedPrice = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const currencySymbol = formattedPrice + " VND";
        return currencySymbol;
    }
    const navigate = useNavigate();

    return (
        <>
            {result && result.length > 0 ? (    
                <>
                    <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Có {result.length} phòng phù hợp:</h1>
                    {result?.map((room) => {
                        return (
                            <>
                                <div className="searchItem" >

                                    <img src={room.room_img} alt="" className="siImg" onClick={() => navigate(`/room/${room.room_id}`)} />
                                    <div className="siRating">{room.rating_hotel}</div>
                                    <div className="siDesc">
                                        <h1 className="siTitle">{room.hotel_name}</h1>
                                        <h3 className="siDistance">{room.city_name}</h3>
                                        <span className="siSubtitle">
                                            {room.number_of_adults} người lớn-{room.number_of_children} trẻ em
                                        </span>
                                        <span className="siFeatures">
                                        </span>
                                    </div>
                                    <div className="siDetailTexts">
                                        <span className="siPrice">{formatPrice(room.price)}</span>
                                        {/* <button className="siCheckButton">Xem thêm</button> */}
                                    </div>
                                </div>
                            </>
                        )
                    }
                    )
                    }
                </>
            ) : (
                <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Không tồn tại phòng nào</h1>
            )}
        </>
    );
};

export default SearchList