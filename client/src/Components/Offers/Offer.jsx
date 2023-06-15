import React from "react";
import './offer.css';
import { MdKingBed, MdBathTub, MdAirportShuttle, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'

import img from '../../Assests/image (1).jpg'
import img from '../../Assests/image (2).jpg'
import img from '../../Assests/image (3).jpg'
const Offers = [
    {
        id: 1,
        imgSrc: img1,
        stTdeitle: 'XXX',
        location: 'sss',
        price: 'AAA'
    },

    {
        id: 2,
        imgSrc: img2,
        stTdeitle: 'XXX',
        location: 'sss',
        price: 'AAA'
    },

    {
        id: 3,
        imgSrc: img3,
        stTdeitle: 'XXX',
        location: 'sss',
        price: 'AAA'
    },
]
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
                    {
                        Offers.map(({ id, imgSrc, stTdeitle, location, price }) => {
                            return (
                                <div className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt={stTdeitle} />

                                        <span className="discount">
                                            30% Off
                                        </span>
                                    </div>

                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>
                                                {price}
                                            </h4>
                                            <span className="status">
                                                for rent
                                            </span>

                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenites flex">
                                                <MdKingBed className="icon" />
                                                <small>2 Beds</small>
                                            </div>
                                            <div className="singleAmenites flex">
                                                <MdBathTub className="icon" />
                                                <small>1 Bath</small>
                                            </div>
                                            <div className="singleAmenites flex">
                                                <FaWifi className="icon" />
                                                <small>Wi-Fi</small>
                                            </div>
                                            <div className="singleAmenites flex">
                                                <MdAirportShuttle className="icon" />
                                                <small>Shuttle</small>
                                            </div>
                                        </div>
                                        <div className="location flex">
                                            <MdLocationOn className="icon" />
                                            <small>xxx,{location}</small>

                                        </div>
                                        <button className="btn flex">
                                            View Details
                                            <BsArrowRightShort className="icon" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default Offer