import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomePopUp from '../HomePopUp/HomePopUp';
import TimeLine from './TimeLine';

const About = () => {

    return (
        <>
            <Helmet>
                <title>About :: Unity Mart</title>
                <meta
                    name="description"
                    content="Learn more about Unity Mart."
                />
                <link rel="canonical" href="/about" />
            </Helmet>
            <div>
                <h1 className='text-white text-center text-4xl font-bold py-3 bg-purple-600  hover:bg-sky-700'>About Us</h1>
                <div className='container mx-auto overflow-hidden'>
                    <div className='relative'>
                        <img src='https://template.annimexweb.com/diva/assets/images/parallax-banners/testimonials-bg.jpg' className="w-full mx-auto" alt='' />
                        <div className='absolute inset-0 bg-black bg-opacity-40 items-center py-12'>
                            <h2 className='text-blue-200 text-center text-4xl font-bold py-3'>Unity Mart</h2>
                            <h2 className='text-pink-200 text-center text-4xl font-bold py-3'>A multivendor E-commerce Site</h2>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-0 items-center justify-center'>
                            <div className='w-50'>
                                <img src="https://template.annimexweb.com/diva/assets/images/about/about-us-image5.jpg" className="w-full" alt='' />
                            </div>
                            <div className='w-50 px-5 text-center'>
                                <h2 className='text-2xl font-medium text-gray-800 dark:text-white uppercase mb-6'>What is Unity Mart</h2>
                                <p className='dark:text-white'>Unity Mart comes with easy-to-use interface and outstanding support. You can implement your own design. You can easily change the store's appearance as per your requirements using our ready sections and options available.You can easily change the store's appearance as per your requirements using our ready sections and options available.
                                    Our support teams are ready to help you on any stage of your store setup</p>
                                <button className="mt-2 text-white bg-purple-600 justify-center px-3 py-1 rounded-md hover:bg-purple-800 transition"><HomePopUp /></button>
                            </div>
                        </div>
                    </div>

                    <div className='container mx-auto'>
                        <div className='grid grid-cols-2 gap-0 items-center justify-center'>
                            <div className='w-50  px-7 text-center'>
                                <h2 className='text-2xl font-medium text-gray-800 dark:text-white uppercase mb-6'>Our Mission</h2>
                                <p className='dark:text-white'>Our mission is to create top-quality shopify theme which is unique, clean, easy to use, bug less, easy to load and have all the features that merchant need to run their online eCommerce business successfully.</p>
                            </div>
                            <div className='w-50'>
                                <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <TimeLine />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;