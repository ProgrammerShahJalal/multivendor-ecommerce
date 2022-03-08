import React from 'react';

const OurLocation = () => {
    return (
        <div className="py-5 overflow-hidden">
            <div className="grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 lg:gap-4 py-7">
                <div className="grid grid-cols-1 md:flex font-bold sm:font-normal sm:text-sm mx-auto px-3">
                    <div className='shrink grid grid-cols-1 py-3 mx-auto px-3
                        '>
                        <img src="https://i.ibb.co/xC5Lxcb/contact-us.png" className='w-24 origin-center hover:rotate-180 transition duration-700' alt="" />
                        <a href="tel:+0194458988005" className='text-1xl font-bold text-purple-800 px-3 uppercase'>Click To Call By Phone</a>
                    </div>

                    <div className='shrink grid grid-cols-1 py-3 mx-auto px-3'>
                        <img src="https://i.ibb.co/QKyXvdy/placeholder.png" className='w-24 origin-center hover:rotate-180 transition duration-700' alt="" />
                        <p className="w-64 text-base font-normal text-purple-800 px-3 sm:text-sm">Unity-Mart, House No.54, Sheikh Kamal Sarani, Road No. 16, Rangs square (5th & 6th floor), <br />Basundhara, Dhaka 1209, Bangladesh</p>
                    </div>

                    <div className='shrink grid grid-cols-1 py-3 mx-auto px-3'>
                        <img src="https://i.ibb.co/RSY94bw/message.png" className='w-24 origin-center hover:rotate-180 transition duration-700' alt="" />
                        <p className="font-bold text-purple-800 px-3 sm:text-sm text-base">remote.coder.unity@gmil.com</p>
                    </div>
                </div>

                <div className="w-full py-3 px-8">
                    <h2 className='text-4xl font-bold text-center text-pink-800 uppercase pb-6'>Our Location</h2>
                    <iframe className='w-full' src="https://www.google.com/maps/d/embed?mid=1q2qjZOSoGTsfxAsLN4iir4gk0Gc&hl=en&ehbc=2E312F" height="480" title='Our Location'></iframe>
                </div>

            </div>
        </div>
    );
};

export default OurLocation;
