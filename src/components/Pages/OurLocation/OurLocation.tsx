import React from 'react';

const OurLocation = () => {
    return (
        <div className="container mx-auto py-5">
            <h2 className='text-4xl font-bold text-center text-pink-800 uppercase pb-6'>Our Locations</h2>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 py-7">
                <div className="p-2">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1q2qjZOSoGTsfxAsLN4iir4gk0Gc&hl=en&ehbc=2E312F" width="640" height="480"></iframe>
                </div>
                <div className='mx-auto items-center py-12'>
                    <div className="fw-bolder px-7 ">
                        <div className='flex items-center'>
                            <img src="https://i.ibb.co/xC5Lxcb/contact-us.png" className='w-10' alt="" />
                            <a href="tel:+0194458988005" className='text-1xl font-bold text-center text-purple-800 px-3 uppercase'>Click To Call By Phone  </a>
                        </div>
                        <div className='py-3 fw-bolder'>
                            <hr></hr>
                        </div>
                        <div className='flex items-center justify-around py-3'>
                            <img src="https://i.ibb.co/7JHJ9Z3/pin.png" className='w-10' alt="" />
                            <p className="fw-bolder text-base font-bold text-purple-800 px-3 uppercase">Unity-Mart, House No.54, Sheikh Kamal Sarani, Road No. 16, Rangs square (5th & 6th floor), <br />Basundhara, Dhaka 1209, Bangladesh</p>
                        </div>
                        <div className='py-3 fw-bolder'>
                            <hr></hr>
                        </div>
                        <div className='flex items-center py-3'>
                            <img src="https://i.ibb.co/RSY94bw/message.png" className='w-10' alt="" />
                            <p className="fw-bolder text-base font-bold text-purple-800 px-3">unitymart2022@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurLocation;
