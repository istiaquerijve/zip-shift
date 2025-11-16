import React from 'react';
import icon from '../../../assets/bookingicon.png'

const Section1 = () => {
    return (
        <div className='p-20'>
            <h1 className='font-bold text-3xl'>How it Works</h1>
            <div className='flex justify-between gap-3 mt-3'>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <img src={icon} alt="" />
                    <h1 className='mt-2.5'>Booking Pick & Drop</h1>
                    <p className='mt-2.5'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <img src={icon} alt="" />
                    <h1 className='mt-2.5'>Cash On Delivery</h1>
                    <p className='mt-2.5'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <img src={icon} alt="" />
                    <h1 className='mt-2.5'>Delivery Hub</h1>
                    <p className='mt-2.5'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <img src={icon} alt="" />
                    <h1 className='mt-2.5'>Booking SME & Corporate</h1>
                    <p className='mt-2.5'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Section1;