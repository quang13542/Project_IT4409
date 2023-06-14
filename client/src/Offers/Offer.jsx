import React from "react";
import './offer.css';
import {MdKingBed, MdBathTub, MdAirportShuttle, MdLocationOn} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {BsArrowRightShort} from 'react-icons/bs'

import img from '../../Assests/image (4).jpg'


const Offer = () => {
    return (
    <section className="offer container section">
        <div className="secContainer">
            <div className="secIntro">
                <h2 className="secTitle">
                    Special Offers
                </h2>
                <p>
                    Chao mung den binh nguyen vo tan
                </p>
            </div>

            <div className="mainContent grid">
                <div className="singleOffer">
                    <div className="destImage">
                        <img src={img} alt="Image Name" />

                        <span className="discount">
                            30% Off
                        </span>
                    </div>

                    <div className="offerBody">
                        <div className="price flex">
                            <h4>
                                $1000
                            </h4>
                            <span className="status">
                                fo rent
                            </span>

                        </div>

                        <div className="amenities flex">
                            <div className="singleAmenites flex">
                                <MdKingBed className="icon"/>
                                <small>2 Beds</small>
                            </div>
                            <div className="singleAmenites flex">
                                <MdBathTub className="icon"/>
                                <small>1 Bath</small>
                            </div>
                            <div className="singleAmenites flex">
                                <FaWifi className="icon"/>
                                <small>Wi-Fi</small>
                            </div>
                            <div className="singleAmenites flex">
                                <MdAirportShuttle className="icon"/>
                                <small>Shuttle</small>
                            </div>
                        </div>
                        <div className="location flex">
                            <MdLocationOn className= "icon"/>
                            <small>xxx,Ha Noi</small>

                        </div>
                        <button className="btn flex">
                            View Details
                            <BsArrowRightShort className = "icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}