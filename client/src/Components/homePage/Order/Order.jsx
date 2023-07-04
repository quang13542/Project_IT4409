import { useNavigate } from "react-router";
import { placeOrder } from "../../../API/order";
import "./order.scss";
import { useState } from "react";

const Order = ({ room_id, user_id }) => {
    const navigate = useNavigate();
    const [checkin, setCheckin] = useState("2023-1-1T0:0");
    const [checkout, setCheckout] = useState("2023-2-1T0:0");
    const [nights, setNights] = useState(1);
    const [duty, setDuty] = useState(false);
    const order = {
        room_id: room_id,
        user_id: user_id,
        checkin: checkin,
        checkout: checkout,
        nights: nights,
        duty: duty,

    }
    const handleOrder = async () => {
        try {
            console.log(order);
            const res = await placeOrder(order);
            console.log("order: ",res);
            alert("Bạn đã đặt phòng thành công");
            // navigate("/successOrder");
        } catch (err) {
            alert("Phòng đã có người đặt trước");
        }
    }
    return (
        <div className="orderDiv">
            <h2 className="orderTitle">Xác nhận đặt phòng</h2>
            <div className="orderInfo">
                <h4 className="orderUser">Khách hàng: Username</h4>
                <h4 className="orderUser">Tên khách sạn: HOTELVjPPRO</h4>
            </div>
            <form action="" className="orderForm" onSubmit={handleOrder}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="checkin">Checkin</label>
                        <input
                            className="orderInput"
                            id="checkin"
                            type="datetime-local"
                            value={checkin}
                            onChange={e => setCheckin(e.target.value)}
                        />
                        <label htmlFor="checkout">Checkout</label>
                        <input
                            className="orderInput"
                            id="checkout"
                            type="datetime-local"
                            value={checkout}
                            onChange={e => setCheckout(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                        <label htmlFor="night">Night</label>
                        <input
                            className="orderInput"
                            id="night"
                            type="number"
                            value={nights}
                            onChange={e => setNights(e.target.value)}
                        />
                        <label htmlFor="duty">Duty</label>
                        <input
                            className="orderInput"
                            id="duty"
                            type="text"
                            value={duty}
                            onChange={e => setDuty(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                        <label htmlFor="bank">Ngân hàng</label>
                        <input className="orderInput" id="bank" type="text" />
                        <label htmlFor="stk">Số tài khoản</label>
                        <input className="orderInput" id="stk" type="text" />
                    </div>
                </div>
                <button className="orderBtn" type="submit">
                    Thanh Toán
                </button>
            </form>

        </div>
    )
}

export default Order;