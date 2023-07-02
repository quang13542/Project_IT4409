import React, { useEffect, useState } from "react";
import "./feature.scss";
import { filterRooms, mostCity } from "../../../API/rooms";
import { Navigate, useAsyncError, useNavigate } from "react-router";
import { setRooms } from "../../../Redux/roomSlice";
import { useDispatch } from "react-redux";

const Feature = () => {
    const [cityList, setCityList] = useState([]);
    const fetchData = async () => {
        try {
            const res = await mostCity();
            console.log("most city:", res);
            setCityList(res);
        }
        catch (error) {
            console.log(error);
        }
        finally {
        }
    }
    const img = {
        0:"https://vcdn1-dulich.vnecdn.net/2022/05/13/hohoabinh-1652415316-5109-1652415499.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=8KCD1P1Rg6b2V-MINSu3Bw",
        1:"https://kenhhomestay.com/wp-content/uploads/2019/01/du-lich-thai-nguyen-8.jpg",
        2:"https://afamilycdn.com/150157425591193600/2020/7/27/dsc8959-15958388098111098476186.jpg",
        3:"https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-binh-thuan.jpg"

    }
    
    const [city, setCity] =useState("")
    const navigate =useNavigate();  
    const handleSearch = async (cityname) => {
        try {
            const filter = {
                city: city,
                checkin:"2023-06-23T20:46",
                checkout:"2023-06-24T20:46",
                adults: 0,
                children: 0,
                duty: true,
            }
            console.log(filter);
            const query =new URLSearchParams(filter).toString();
            navigate(`/result?${query}`);
            
        }
        catch (error) {
            console.log(error);
        }
        finally {
            // setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    })
    return (
        <>
            <div className="feature">
                <div className="featureHeader">
                    <h2>Điểm đến du lịch thu hút ở Việt Nam</h2>
                </div>
                <div className="featureList">
                    {cityList.map((city, index) => {
                        return (
                            <>
                                <div className="featureItem" >
                                    <img className="featureImg" src={img[index]} alt="" />
                                    <div className="featureTitle">
                                        <h2>{city.city_name}</h2>
                                        <h3>{city.count_room}0</h3>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>

            </div>
        </>

    )
}

export default Feature;