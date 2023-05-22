import React from 'react';
import './Desert.scss'

const Deserts = ({el, setSelected}) => {

    return (
        <div className='desert'>
            {
                <div className="desert__btn">
                    <button onClick={() => setSelected(el.id)}>{el.title}</button>
                    <div className="desert__btn--line"/>
                </div>
            }
        </div>
    );
};

export default Deserts;