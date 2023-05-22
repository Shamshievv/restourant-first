import React from 'react';
import '../../../../style/About/About.scss'
import som from './../../../../image/Frame 10 (1).svg'
import sous from './../../../../image/sous.png'
import sous2 from './../../../../image/sous2.png'

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about--all">
                        <div className="about--all__us">
                            <h2><img src={som} alt=""/>About Us</h2>
                        </div>
                    </div>
                    <div className="abouts">
                        <div className="about--text">
                            <div className="about--text__jon">
                                <h1>A Journey Throught <br/>
                                    Cafesio Flavors</h1>
                            </div>
                            <div className="about--text__jonTwo">
                                <p>Try dishes that will open up new tastes for you and delight your
                                    eyes with their appearance. Here you will find a cozy
                                    atmosphere, excellent service and attention to each guest.
                                    Book a table now and enjoy a unique experience of taste discovery!</p>
                            </div>
                        </div>
                        <div className="about--sous">
                            <img className='imgOne' src={sous} alt=""/>
                            <img className='imgOne' src={sous2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;