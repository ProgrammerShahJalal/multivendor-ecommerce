import React from 'react';
import phero from './../../../images/Brands/phero-logo.png';
import daraz from './../../../images/Brands/daraz-logo.png';
import adidas from './../../../images/Brands/adidas-logo.png';
import nike from './../../../images/Brands/nike-logo.png';
import underarmour from './../../../images/Brands/underarmour-logo.png';
import microsoft from './../../../images/Brands/microsoft-logo.png';
import './Brands.css';
const Brands = () => {
    return (
        <div className='container mx-auto py-5'>
            <h2 className='text-2xl font-bold text-gray-700 uppercase pb-6 text-center'>Our Top Sponsors</h2>

            <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 text-black gap-4'>

                <div className='p-1 brand-logo'>
                    <img src={phero} className='w-full' alt='' />
                </div>

                <div className='p-1 brand-logo'>
                    <img src={daraz} className='w-full' alt='' />
                </div>

                <div className='p-1 brand-logo'>
                    <img src={adidas} className='w-full' alt='' />
                </div>

                <div className='p-1 brand-logo'>
                    <img src={nike} className='w-full' alt='' />
                </div>

                <div className='p-1 brand-logo'>
                    <img src={underarmour} className='w-full' alt='' />
                </div>

                <div className='p-1 brand-logo'>
                    <img src={microsoft} className='w-full' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Brands;