import React from "react";
import "./feature.css";

const Feature = () => {
    return (
        <>
            <div className="feature">
                <div className="featureHeader">
                    <h2>Điểm đến du lịch thu hút ở Việt Nam</h2>
                </div>
                <div className="featureList">
                    <div className="featureItem">
                        <img className="featureImg" src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA" alt="" />
                        <div className="featureTitle">
                            <h2>Đà Nẵng</h2>
                            <h3>asdasd.</h3>
                        </div>
                    </div>
                    <div className="featureItem">
                        <img className="featureImg" src="https://vcdn1-dulich.vnecdn.net/2022/05/07/vinhHaLongQuangNinh-1651912066-8789-1651932294.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=bAYE9-ifwt-9mB2amIjnqg" alt="" />
                        <div className="featureTitle">
                            <h2>Quảng Ninh</h2>
                            <h3>Vịnh Hạ Long</h3>
                        </div>
                    </div>
                    <div className="featureItem">
                        <img className="featureImg" src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip-1.jpg" alt="" />
                        <div className="featureTitle">
                            <h2>Quảng Nam</h2>
                            <h3>Tp. Hội An</h3>
                        </div>
                    </div>
                    <div className="featureItem">
                        <img className="featureImg" src="https://vcdn1-dulich.vnecdn.net/2022/05/09/shutterstock-280926449-6744-15-3483-9174-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bGCo6Rv6DseMDE_07TT1Aw" alt="" />
                        <div className="featureTitle">
                            <h2>Nha Trang</h2>
                            <h3>Du lich</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Feature;