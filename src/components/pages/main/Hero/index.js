import React from 'react';
import ionic from '../../../../image/ionca.svg'
import ionic2 from '../../../../image/ionca2.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import {MdLocalPhone} from 'react-icons/md'

const Hero = () => {
    return (
        <div id='hero'>
            <div className="container">
                <hr className="hero__line-top"/>
                <hr className="hero__line-bottom"/>
                <hr className="hero__line-left"/>
                <div className="hero">
                    <div className="hero--block">
                        <img src={ionic} alt=""/>
                        <h4>Delicious</h4>
                        <img src={ionic2} alt=""/>
                    </div>
                    <div className="hero--main">
                        <h1>Italian Cuisine</h1>
                        <p>Classic steak & delicious with delightfully unexpenced twists.
                            The Restaurant`s sunny decor was inspired by the diners</p>
                        <div className="hero--main__decor">
                            <div/>
                            <button>  <h1>Reserve Your Table<AiOutlineArrowRight style={{
                                 marginLeft: '15px'
                            }}/></h1></button>
                            <div/>
                        </div>
                    </div>
                    <div className="hero--absence">
                        <div className="hero--absence__archive">
                            <h1>Location</h1>
                            <div/>
                            <ImLocation2 className="hero--absence__archive--icon"/>
                            <h4>Rua da media 1g,1200-275,Portugal</h4>
                        </div>
                        <div className="hero--absence__select">
                            <h1>Hotline</h1>
                            <div/>
                            <MdLocalPhone className="hero--absence__select--icon"/>
                            <h5>+771219900</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;