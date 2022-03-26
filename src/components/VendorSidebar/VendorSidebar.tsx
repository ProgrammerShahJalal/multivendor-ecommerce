import React from 'react';
import LottieVendor from '../Lottie/LottieVendor';

const VendorSidebar = () => {
    return (
        <div className='hidden lg:block'>
            <img className='w-64' src="https://i.ibb.co/kQvshG3/bigsale.jpg" alt="" />
            <LottieVendor />
        </div>
    );
};

export default VendorSidebar;