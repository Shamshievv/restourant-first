import React from 'react';
import jas  from  "../../../../image/Frame 10 (1).svg"
import saj from "../../../../image/fork.png"
 import img from "../../../../image/img.svg"
 import huge from "../../../../image/img2.png"
 import huge2 from "../../../../image/img3.png"
 import bos from "../../../../image/img4.svg"
 import we from "../../../../image/img5.png"




const Interior = () => {
    return (
        <div >
            <div id="interior">
                <div className="container">
                    <div className="interiors">
                        <div className="interiors--nav">
                            <h1>  <span><img src={jas} alt="img"/></span> modern interior <span><img src={saj} alt="img"/></span></h1>
                        </div>
                    </div>
                    <div className="interior--her"/>

                    <div className="interior">

                        <div className="interior--tittle">
                            <div className="interior--tittle__her"/>
                            <img src={img} alt="img"/>
                            <div className="inter--tittle__bloc">
                                <img src={huge} alt="img"/>
                                <div className="interior--tittle__bloc--blocs">
                                    <img src={huge2} alt="img"/>
                                    <img src={bos} alt="img"/>
                                </div>

                            </div>
                            <img src={we} alt="img"/>
                        </div>
                        <div className="interior--tittle">

                            <img src={img} alt="img"/>
                            <div className="inter--tittle__bloc">
                                <img src={huge} alt="img"/>
                                <div className="interior--tittle__bloc--blocs">
                                    <img src={huge2} alt="img"/>
                                    <img src={bos} alt="img"/>
                                </div>

                            </div>
                            <img src={we} alt="img"/>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Interior;