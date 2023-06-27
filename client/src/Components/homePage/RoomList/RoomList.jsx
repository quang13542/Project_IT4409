import React, { useEffect, useState } from "react";
import "./roomList.css"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useNavigate } from "react-router";
import BeatLoader from 'react-spinners/BeatLoader'
import { getAllRooms } from "../../../API/rooms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const RoomList = () => {
    const [roomList, setRoomList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await getAllRooms({
                page: page

            });
            console.log(">>check res:", res);
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
    useEffect(() => {
        fetchData();
    }, [page])

    const handlePrevPage = (page) => {
        if (page <= 0) setPage(1);
        else setPage((prev) => prev - 1);
        console.log("pre, page:", page);
    }
    const handleNextPage = (page) => {
        if (page >= 5) setPage(0);
        else setPage((prev) => prev + 1);
        console.log("next, page:", page);
    }
    const formatPrice=(price) => {
        const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const currencySymbol = formattedPrice+ " VND";        
        return currencySymbol;
      }

    console.log(roomList);
    return (
        <div className="listContainer">
            <div className="listHeader">
                <h2>Những phòng nổi bật</h2>
                <div>
                    {page > 1 ? (<FaLongArrowAltLeft className="icon" onClick={handlePrevPage} />) : (
                        <FaLongArrowAltLeft className="icon" />)
                    }
                    {roomList.length >= 1 && roomList.length < 4 ? (<FaLongArrowAltRight className="icon" />) : (
                        <FaLongArrowAltRight className="icon" onClick={handleNextPage} />
                    )}

                </div>
            </div>
            {loading ? (
                <div style={{ textAlign: "center" }}>
                    <BeatLoader color={'#2596be'} loading={loading} size={20} />
                </div>
            ) : (
                <>
                    {roomList && roomList.length > 0 ? (
                        <div className="roomList">
                            {roomList.map((room, index) => {
                                return (
                                    <>
                                        <div className="listItem">
                                            <div className="rate">
                                                <h3>{room.rating_hotel}</h3>
                                            </div>
                                            <img
                                                className="listImg"
                                                src={room.url}
                                                onClick={() => navigate(`/room/${room.room_id}`)} />
                                            <div className="listDetail">
                                                <h3>{room.hotel_name}</h3>
                                                <p className="locationDetail"><FontAwesomeIcon icon={faLocationDot}/>
                                                    {""}{room.city_name}</p>
                                                <small>Giá mỗi đêm rẻ nhất từ</small>
                                                <p className="priceDetail"><b>{formatPrice(room.price)}</b></p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    ) : (
                        <h2>Không có phòng nào</h2>
                    )}
                </>
            )}



        </div>


    )
}
export default RoomList