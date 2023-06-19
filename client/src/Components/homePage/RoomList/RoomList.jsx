import React, { useEffect, useState } from "react";
import "./roomList.css"
import roomApi from "../../../API/roomApi";
const RoomList = () => {
    const[roomList, setRoomList] =useState([]);

    const fetchData = async () => {
        try{
            //setLoading(true)
            const res = await roomApi.getAll();
            console.log(">>check res:", res);
            // if(res.status === "success") {
                setRoomList(res);
            // }
        }
        catch(error)
        {
            console.log(error);
        }
        finally{
            //setLoading(false)
        }
    }
    useEffect(() => {
        console.log("room list:",roomList)
        // console.log(">>Check state:");
        // console.log(">>Check product:");
        fetchData();
    },[])

    return (
        <div className="listContainer">
            <div className="listHeader">
                <h2>Những phòng nổi bật</h2>
            </div>
            <div className="roomList">
                {roomList.map ((room)=> {
                    <div className="listItem">
                    <div className="rate">
                        <h3>9.2</h3>
                    </div>
                    <img className="listImg" src={room.url} alt="" />
                    <div className="listDetail">
                        <h3>{room.id}</h3>
                        <p>{room.title}</p>
                        <span>USD 234</span>
                    </div>
                </div>
                })}
                {/* <div className="listItem">
                    <div className="rate">
                        <h3>9.2</h3>
                    </div>
                    <img className="listImg" src="https://pix8.agoda.net/hotelImages/36924896/0/fff45b5dc3fd5ce71ad3bf0f1b0de55a.jpg?ce=0&s=1024x768" alt="" />
                    <div className="listDetail">
                        <h3>The ABCD</h3>
                        <p>Thành phố Hồ Chí Minh</p>
                        <span>USD 234</span>

                    </div>
                </div>
                <div className="listItem">
                    <div className="rate">
                        <h3>9.2</h3>
                    </div>
                    <img className="listImg" src="https://pix8.agoda.net/hotelImages/36924896/0/fff45b5dc3fd5ce71ad3bf0f1b0de55a.jpg?ce=0&s=1024x768" alt="" />
                    <div className="listDetail">
                        <h3>The ABCD</h3>
                        <p>Thành phố Hồ Chí Minh</p>
                        <span>USD 234</span>

                    </div>
                </div>
                <div className="listItem">
                    <div className="rate">
                        <h3>9.2</h3>
                    </div>
                    <img className="listImg" src="https://pix8.agoda.net/hotelImages/36924896/0/fff45b5dc3fd5ce71ad3bf0f1b0de55a.jpg?ce=0&s=1024x768" alt="" />
                    <div className="listDetail">
                        <h3>The ABCD</h3>
                        <p>Thành phố Hồ Chí Minh</p>
                        <span>USD 234</span>

                    </div>
                </div> */}
                
            </div>

        </div>
    )
}
export default RoomList