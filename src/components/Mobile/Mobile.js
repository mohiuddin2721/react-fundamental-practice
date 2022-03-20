import React, { useState } from 'react';

const Mobile = () => {
    const [charge, setCharge] = useState(100);
    
    const chargeUp = () => {
        if (charge < 100) {
            setCharge(charge + 10);
        }
    };
    const chargeDown = () => {
        if (charge > 0) {
            setCharge(charge - 10);
        }
    };
    return (
        <div className='mobile'>
            <h3>Mobile Charge: {charge}%</h3>
            <button onClick={chargeUp} className='btn-success p-2 ms-3 rounded'>Up</button>
            <button onClick={chargeDown} className='btn-danger p-2 ms-3 rounded'>Down</button>
        </div>
    );
};

export default Mobile;