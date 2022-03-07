import React from 'react';
import HomePopUp from '../HomePopUp/HomePopUp';

const AboutUs = () => {

    return (
        <div>
            <h1 className='text-white text-center text-4xl font-bold py-3 bg-purple-600  hover:bg-sky-700'>About Us</h1>
            <div className='container mx-auto'>
                <img src='https://template.annimexweb.com/diva/assets/images/parallax-banners/testimonials-bg.jpg' className="w-full mx-auto" alt='' />

                <div className='container'>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-0 items-center justify-center'>
                        <div className='w-50'>
                            <img src="https://template.annimexweb.com/diva/assets/images/about/about-us-image5.jpg" className="w-full" alt='' />
                        </div>
                        <div className='w-50 px-5 text-center'>
                            <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>What is Unity Mart</h2>
                            <p>Unity Mart comes with easy-to-use interface and outstanding support. You can implement your own design. You can easily change the store's appearance as per your requirements using our ready sections and options available.
                                Our support teams are ready to help you on any stage of your store setup</p>
                            <button className="mt-2 text-white bg-purple-600 justify-center px-3 py-1 rounded-md hover:bg-purple-800 transition"><HomePopUp /></button>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-0 items-center justify-center'>
                        <div className='w-50  px-7 text-center'>
                            <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>Our Mission</h2>
                            <p>Our mission is to create top-quality shopify theme which is unique, clean, easy to use, bug less, easy to load and have all the features that merchant need to run their online eCommerce business successfully.</p>
                        </div>
                        <div className='w-50'>
                            <img src="https://template.annimexweb.com/diva/assets/images/about/about-us-image2.jpg" alt='' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;