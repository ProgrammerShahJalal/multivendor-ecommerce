import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../VedioModal/VedioModal.css';

const BannerGadget = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <div className='container bg-white dark:bg-gray-800 mx-auto py-4 my-3'>
            <div className='container bg-white dark:bg-gray-800 mx-auto py-3'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                    <div className='relative'>
                        <img src='https://i.ibb.co/1qGvwJf/electro-banner10.jpg' className="w-full" alt='' />
                        <div className='absolute inset-y-8 left-5 w-72 py-2'>
                            <h3 className='text-blue-500 font-medium'>NEW TECHNOLOGIES</h3>
                            <h1 className="lg:text-4xl text-gray-800 dark:text-gray-800 font-bold hover:text-pink-600 py-3 sm:text-sm">WEBCAMS 2022</h1>
                            <p className='text-gray-600 font-medium hover:text-pink-800 p-2 lg:block md:block hidden'>The webcam is an essential computer accessories.</p>

                            <img onClick={toggleModal} className='w-20 cursor-pointer' src="https://i.ibb.co/k5KPQ3S/video-player.gif" alt="" />
                            <div className=''>

                                {modal && (
                                    <div className="modal">
                                        <div onClick={toggleModal} className="overlay"></div>
                                        <div className="modal-content">
                                            <iframe width="100%" height="80%" src="https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/v2/4a7c9a7e-f507-51c7-a42a-7413690693ea/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4" title="YouTube video player" frameBorder={0} allow="autoplay" ></iframe>

                                        </div>
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>

                    <div className='relative'>
                        <img src='https://i.ibb.co/Smx4Fc1/electro-banner11.jpg' className="w-full" alt='' />
                        <div className='absolute inset-y-8 left-5 w-72 py-1'>
                            <h3 className='text-blue-200 font-medium'>APPLE ACCESSORIES</h3>
                            <h1 className="lg:text-4xl text-white font-bold hover:text-gray-800 dark:text-white py-3 sm:text-sm">LEATHER CASES</h1>
                            <p className='text-blue-200 font-medium hover:text-gray-800 dark:text-white p-2 lg:block md:block hidden'>Black Unity Braided Solo Loop functionality.</p>
                            <Link to="/shop">
                                <button className='bg-white dark:bg-slate-800 text-gray-800 dark:text-white px-3 py-2 pb-1 rounded-full hover:bg-pink-500 font-bold lg:block hidden'>SHOP MORE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerGadget;