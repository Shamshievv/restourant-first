import React from 'react';
import all from '../../../../image/Frame 10 (1).svg'
import Fish from '../../../../image/fish.png'
import FishTwo from '../../../../image/fishTwo.png'
import Slider from "react-slick";
import next from './../../../../image/nextArrow.svg'

const Best = () => {
    const settings = {
        dots: true,
        lazyLoad: false,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <img className="slick-image" src={next}/>,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide:  1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.08,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id='best'>
            <div className="container">
                <div className="best">
                    <div className="best--add">
                        <div className="best--add__all">
                            <h4><img src={all} alt=""/>Best Sellers</h4>

                                <h2>You Only Reserve <br/>
                                    Exception</h2>
                                <p>Each location has a menu that`s curated just for them. <br/>
                                    See what new at your Cafesio and You`ll find Cafesio <br/>
                                    Covent Carden moments.</p>

                        </div>
                    </div>
                    <div className="best-add__set">
                        <Slider {...settings}>
                            <div>
                                <img  src={Fish} alt=""/>
                            </div>
                            <div>
                                <img src={FishTwo} alt=""/>
                            </div>
                            <div>
                                <img src={Fish} alt=""/>
                            </div>
                            <div>
                                <img  src={Fish} alt=""/>
                            </div>
                            <div>
                                <img  src={FishTwo} alt=""/>
                            </div>
                            <div>
                                <img src={Fish} alt=""/>
                            </div>
                            <div>
                                <img src={FishTwo} alt=""/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Best;