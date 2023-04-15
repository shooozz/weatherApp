import React from "react";
import iconCold from './image/icon-cold.png';

function Status() {
    return (
        <div className='status'>
            <div className='status-icon'><img src={iconCold} alt='icon-cold'/></div>
            <div className='status-inline'><p>cool</p></div>
        </div>
    )
}

export default Status;