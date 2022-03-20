import React, { useState } from 'react';

const Mobile = () => {
    const [charge, setCharge] = useState(100);
    
    const chargeUp = () => {
        if (charge < 100) {
            setCharge(charge + 10);
        }
        if (charge > 20) {
            document.getElementById('danger-charge').style.color = "green";
        }
    };
    const chargeDown = () => {
        if (charge > 0) {
            setCharge(charge - 10);
        }
        if (charge <= 41) {
            document.getElementById('danger-charge').style.color = "red";
        }
    };
    return (
        <div className='mobile'>
            <h3>Mobile Charge: <span id='danger-charge'>{charge}</span> %</h3>
            <button onClick={chargeUp} className='btn-success p-2 ms-3 rounded'>Up</button>
            <button onClick={chargeDown} className='btn-danger p-2 ms-3 rounded'>Down</button>
        </div>
    );
};

export default Mobile;