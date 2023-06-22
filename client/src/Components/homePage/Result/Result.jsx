import React from "react";
import './result.css';


const SearchItem = () => {
    return (
    <div className="searchItem">
        <img src="" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">toa nha AAA</h1>
            <span className="siDistance">500m tu trung tam</span>
            <span className="taxi0p">co taxi</span>
            <span className="siSubtitle">
                AAAA
            </span>
            <span className="siFeatures">
                dien tich 21m2 ca phong ngu
            </span>
            <span className="siCancel0p">Huy mien phi</span>
            <span className="siCancel0pSubtitle">
                Ban co th huy phong
            </span>

        </div>
        <div className="siDetails">
            <div className="siRating">
                <span className="Excellent">Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">3.000.000đ</span>
                <span className="siTaxi0p">Đã bao gồm phí Taxi</span>
                <button className="siCheckButton">Xem thêm</button>
                
            </div>
        </div>
    </div>
    );
};

export default SearchItem