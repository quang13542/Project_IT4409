import React from "react";
import "./roomProp.css";
const RoomProp = () => {
    return (
        <div className="prop">
            <div className="propHeader">
                <h2>Các loại phòng phổ biến</h2>
            </div>
            <div className="propList">
                <div className="propItem">
                    <img className="propImg" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/378828506.jpg?k=ea7d10effc56e6e3ded34794423b9a97f43d25c303867e6051d422a08b023480&o=&hp=1" alt="" />
                    <div className="propTitle">
                        <h2>Khách sạn</h2>
                        <h3>1232</h3>
                    </div>
                </div>
                <div className="propItem">
                    <img className="propImg" src="https://cdn3.ivivu.com/2021/05/resort-moi-trinh-lang-ivivu-1.jpg" alt="" />
                    <div className="propTitle">
                        <h2>Resort</h2>
                        <h3>1232</h3>
                    </div>
                </div>
                <div className="propItem">
                    <img className="propImg" src="https://haidangtravel.com/image/blog/Mountain-Lodge-Homestay-Mang-Den.JPG" alt="" />
                    <div className="propTitle">
                        <h2>Homestay</h2>
                        <h3>1232</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomProp