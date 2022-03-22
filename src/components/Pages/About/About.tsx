import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';
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
      <div className='bg-gray-200'>
        <h1 className='text-white text-center text-4xl font-bold py-3 bg-purple-600  hover:bg-sky-700'>About Us</h1>
        <div className='container mx-auto overflow-hidden'>
          <div className='relative'>
            <img src='https://template.annimexweb.com/diva/assets/images/parallax-banners/testimonials-bg.jpg' className="w-full mx-auto" alt='' />
            <div className='bg-black bg-opacity-40'>
              <div className='absolute inset-24 items-center py-12'>
                <div className='top-48 bottom-48 left-48 right-48 text-center'>
                  <h2 className='text-blue-300 text-center text-4xl font-bold py-3'>Unity Mart</h2>
                  <span style={{ color: '#c77dff', fontWeight: 'bold', fontSize: '2rem' }}>
                    <Typewriter
                      words={['Multi-Vendor e-commerce website', 'Opportunity of affiliate marketing!!', 'Included artificial intelligence', 'Way to best payment system']}
                      loop={true}
                      cursor
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-0 items-center justify-center'>
              <div className='w-50'>
                <img src="https://template.annimexweb.com/diva/assets/images/about/about-us-image5.jpg" className="w-full" alt='' />
              </div>
              <div className='w-50 px-5 text-center'>
                <h2 className='text-2xl font-medium text-gray-800 dark:text-white uppercase mb-6'>What is Unity Mart</h2>
                <p className='dark:text-white'>Unity Mart comes with easy-to-use interface and outstanding support. You can implement your own design.You can easily change the store's appearance as per your requirements using our ready sections and options available.
                  Our support teams are ready to help you on any stage of your store setup</p>
                <button className="mt-2 text-white bg-purple-600 justify-center px-3 py-2 rounded-md hover:bg-purple-800 transition"><HomePopUp /></button>
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