import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {CiSearch} from "react-icons/ci";

const Header = () => {
    const [burger, setBurger] = useState(false)
    console.log(burger)
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div
                        style={{transform: !burger ? 'translate(0, -800px)' : '',}}

                        className="header__menu">
                        <nav className="header__menu--navbar">
                            <NavLink onClick={() => setBurger(false)} to={'/similar'}>
                                interior
                            </NavLink>
                            <NavLink onClick={() => setBurger(false)} to={'/'}>
                                About Us
                            </NavLink>
                            <NavLink onClick={() => setBurger(false)} to={'/menu'}>
                                Menu
                            </NavLink>

                            <NavLink onClick={() => setBurger(false)} to={'/'}>
                                Contacts
                            </NavLink>
                            <div>
                                <button>EN</button>
                                <button>RU</button>
                                <button>KG</button>
                            </div>
                        </nav>
                    </div>
                    <NavLink to={'/'}>
                        <h1> Restaurant</h1>
                    </NavLink>
                    <nav className="header__navbar">
                        <NavLink to={'/similar'}>
                            interior
                        </NavLink>
                        <NavLink to={'/'}>
                             About Us
                        </NavLink>
                        <NavLink to={'/menu'}>
                            Menu
                        </NavLink>

                        <NavLink to={'/'}>
                            Contacts
                        </NavLink>
                        <div className="header__navbar--input">
                            <input type="text" placeholder="Search"/>
                            <span><CiSearch/>
                            </span>
                        </div>
                        <h3>En</h3>
                    </nav>


                    <div
                        onClick={() => setBurger(!burger)}
                        className="header__burger">
                        <div
                            style={{
                                transform: burger ? 'translate(0, -150px)' : 'translate(0) rotate(360deg)'
                            }}
                             className="header__brm">
                            <div className="header__brm--top"/>
                            <div className="header__brm--bottom"/>
                        </div>
                        <div
                            style={{
                                transform: !burger ? 'translate(150px, 0) '  : 'translate(0) rotate(135deg)'
                            }}
                            className="header__close"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;