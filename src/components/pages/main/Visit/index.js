import React from 'react';
import first from "../../../../image/Frame 10 (1).svg"
import {BsArrowRightShort, BsFillTelephoneOutboundFill, BsInstagram} from "react-icons/bs";
import {AiOutlineArrowRight, AiOutlineMail} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";

const Visit = ({img}) => {
    return (
        <div>
            <div id="visit">
                <div className="container">
                    <div className="visit">
                        <div className="visit--us">
                            <div className="visit--us__for">

                                <h3 className="visit--subtitle"><img src={first} alt="img"/> Visit Restaurant</h3>
                            </div>
                            <h1>Join Us for <br/>
                                Happy Hours</h1>
                            <div className="visit--us__lake">
                                <h2>Your neighborhood</h2>
                                <p>225$.Lake Ave.Suite 1150 <br/>
                                    Pasadena,CA 911101</p>
                            </div>
                            <div className="visit--us__open">
                                <h2>Opening hours:</h2>
                                <p>Mon-Thu:ww 10:00 am - 01:00 <br/> am</p>
                                <p>Fri-Sun: 10:00 am - 02:00 am</p>

                            </div>
                            <div className="visit--us__btn">
                                <div className="visit--us__btn--liner"/>
                                <button>Purchase gift card <span><AiOutlineArrowRight/></span> </button>
                                <div className="visit--us__btn--line2"/>
                            </div>
                        </div>
                        <div className="visit--map">
                                  <div className="visit--map__err">


                            <h1>contact Info</h1>
                            <div className="visit--map__err--tell">
                                <span><BsFillTelephoneOutboundFill/></span>
                                <a href="#">+771219900</a>
                            </div>
                            <div className="visit--map__err--mesege">

                                <span style={{
                                    fontSize:"30px"
                                }}><AiOutlineMail/></span>
                                <a href="#">motionweb312@gmail.com</a>
                            </div>
                                  </div>
                            <div className="visit--map__icon">
                                <div className="visit--map__icon--icon2">
                                    <a href="#"> <FaTelegram/> </a>
                                    <a href="#"> <BsInstagram/></a>
                                </div>

                            </div>
                            <div className="visit--map__karta">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d374150.3986153694!2d74.1908780712218!3d42.89289204220957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skarta!5e0!3m2!1sru!2skg!4v1679630737812!5m2!1sru!2skg"
                                    width="500px" height="277px" style={{border: '0'}} loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;