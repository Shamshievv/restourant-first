import React from 'react';
import {NavLink} from "react-router-dom";
import {BsTelegram} from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <div id="footer">
                <div className="container">
                    <div className="footer">
                        <div className="footer--nav">
                           <NavLink to={'/'}>
                                <h1>Restaurant</h1>
                            </NavLink>
                            <nav className="footer__nav--tittle">

                                <NavLink to={'/similar'}>
                                   <p> interior</p>
                                </NavLink>
                                <NavLink to={'/'}>
                                    <p>About Us</p>
                                </NavLink>
                                <NavLink to={'/menu'}>
                                    <p>interior</p>
                                </NavLink>
                                <NavLink to={'/similar'}>
                                    <p>similar</p>
                                </NavLink>
                                <NavLink to={'/'}>
                                    <p>similar</p>
                                </NavLink>
                            </nav>
                            <div className="footer--nav__icon">
                                <p> <BsTelegram/> </p>
                                <p><AiOutlineInstagram/></p>
                            </div>
                        </div>
                     <div className="footer--end">
                          <hr/>
                         <p>c 2023 Motion Study LLC</p>
                     </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;