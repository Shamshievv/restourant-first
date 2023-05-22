import React, {useState} from 'react';
import {data} from "../main/MainMenu/Data";
import {IoMdCloseCircleOutline} from "react-icons/io";

const Similar = () => {
    const [selected, setSelected] = useState(1)
    return (
        <div className="container">
            <div className="menus">

                <div className="menus__desert">
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
                    <IoMdCloseCircleOutline className='close'/>
                    <div>
                        {
                            data.map(el => (
                                selected === el.id && el.nameFoots.slice(0, 1).map(el => (
                                    <div className="similar">
                                        <div>
                                            <img src={el.img} alt=""/>
                                            <div className="similar__subtitles">
                                                <div>
                                                    <h1>{el.name}</h1>
                                                    <p>{el.desert}</p>
                                                </div>
                                                <span>{el.price}</span>
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                            <div className="similar__drinks">
                                                <h1>Drinks</h1>
                                                <div>
                                                    <span>Cherry</span>
                                                    <span>$0.90</span>
                                                </div>
                                                <div>
                                                    <span>Cherry</span>
                                                    <span>$0.90</span>
                                                </div>
                                            </div>
                                            <div className="similar__drinks">
                                                <h1>Drinks</h1>
                                                <div>
                                                    <span>Coca Cola</span>
                                                    <span>$0.90</span>
                                                </div>
                                                <div>
                                                    <span>Coca Cola</span>
                                                    <span>$0.90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                )
                            )
                        }
                    </div>
                        <h2>Similar gueries</h2>
                    {
                        data.map(el => (
                            selected === el.id && el.nameFoots.slice(0, 4).map(el => (
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
    );
};

export default Similar;