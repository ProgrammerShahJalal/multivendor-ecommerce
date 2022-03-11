import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const BannerPro = () => {
    return (
        <div className='container mx-auto py-4'>
            <div className='bg-black grid md:grid-cols-2 sm:grid-cols-1  p-7 my-3 items-center justify-center'>
                <div className='text-white text-center font-bold'>
                    <h4 className="text-gray-400">GAMING COLLECTION</h4>
                    <h1 className="text-4xl hover:text-blue-300 py-2">Sony Playstation 4</h1>
                    <h1 className="text-4xl hover:text-blue-300 pb-3">Dualshok Controller</h1>
                    <Link to="/shop">
                        <button className='bg-blue-600 rounded-full py-2 px-4'>BUY NOW</button>
                    </Link>
                    <HashLink smooth to="#blog">
                        <button className=' bg-gray-500 mx-3 rounded px-3 py-1'>ReadMore</button>
                    </HashLink>
                </div>
                <div className='mt-7' data-aos="fade-up"
                    data-aos-duration="3000">
                    <img src='https://i.ibb.co/9n1JH8h/dualshok.png' className='w-full -mb-28 pt-7 hover:-translate-y-3 transition duration-700 ease-in-out' alt='' />
                </div>
            </div>
        </div>
    );
};

export default BannerPro;