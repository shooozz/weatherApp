import React from "react";
import iconMain from './image/main-icon.png';

function Main() {
    return (
        <div className='main'>
            <div className='main-bg'>
            <button className='main-button'>
                <img src={iconMain} alt='icon'/>
                <p>7°F</p>
            </button>
            </div>
        </div>
    )
}

export default Main;