import React from 'react';
import Foods from "./foods";
import Deserts from "../../Deserts";
import {data} from "../main/MainMenu/Data";
import {useState} from "react";

const Menu = () => {
    const [selected, setSelected] = useState(1)
    console.log(selected)
    return (
        <>
            <div className="container">
                <div className="menus">
                    <div>
                        {
                            data.map(el => (
                                <div>
                                    <div className='desert'>
                                        {
                                            <div className="desert__btn">
                                                <button onClick={() => setSelected(el.id)}>{el.title}</button>
                                                <div className="desert__btn--line"/>
                                            </div>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="menus__deserts">
                        {
                            data.map(el => (
                                selected === el.id && el.nameFoots.map(el => (
                                    <div className="menus__deserts--group">
                                        <img src={el.img} alt=""/>
                                        <div className="menus__deserts--subtitles">
                                            <div>
                                                <h1>{el.name}</h1>
                                                <p>{el.desert}</p>
                                            </div>
                                            <span>{el.price}</span>
                                        </div>
                                    </div>
                                ))
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;