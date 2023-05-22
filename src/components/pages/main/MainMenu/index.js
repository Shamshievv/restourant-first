import React, {useState} from 'react';
import Deserts from "../../../Deserts";
import line from './../../../../image/Frame 10 (1).svg'
import lines from './../../../../image/Frame 9.svg'
import {data} from "./Data";
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

const MainMenu = () => {
    const [selected, setSelected] = useState(1)

    console.log(selected)
    return (
        <div id="mainMenu">
            <div className="container">
                <h1><img src={line} alt=""/>Main Menu<img src={lines} alt=""/></h1>
                <h2>Exceptional Quality. <br/>
                    Delightfully Delicious</h2>
                    <div className="menu">
                        <div className="menu__desert">
                            {
                                data.map(el => (
                                    <div style={{display: 'flex'}}>
                                        <Deserts key={el.id} setSelected={setSelected} el={el}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',}}>
                            {data.map(element => (
                                <div>
                                    {
                                        selected === element.id && element.nameFoots.map(el => (
                                            <div className="menu__right-group">
                                                <div className="menu__price">
                                                    <h1>{el.name}</h1>
                                                    <div style={{display: 'flex', alignItems: 'end'}}>
                                                        <div className="menu__price--dash"/>
                                                        <span>{el.price}</span>
                                                    </div>
                                                </div>
                                                <div className="menu__order">
                                                    <p>{el.text}</p>
                                                    <NavLink to={`/similar/${el.id}`}>Order Now</NavLink>
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                            ))
                            }
                        </div>

                    </div>
                    <div className="menus">
                        <div className="menus--line"/>
                        <NavLink to={'/menu'}>
                            <button className="menus--button">View Full menu <BsArrowRight className="menus--button__arrow"/></button>
                        </NavLink>
                        <div className="menus--line"/>
                    </div>
            </div>
        </div>
    );
};

export default MainMenu;