import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Faq } from '../../FAQ/FAQ';
import HomePopUp from '../HomePopUp/HomePopUp';
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
          {/* <img src='https://template.annimexweb.com/diva/assets/images/parallax-banners/testimonials-bg.jpg' className="w-full mx-auto" alt='' /> */}
          <div className="bg-white dark:bg-slate-800 text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Collections</h2>

                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/05/full/1636094253-2135.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover"></img>
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">

                      <span className="absolute inset-0"></span>
                      Men

                    </h3>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">All men accessories</p>
                  </div>

                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full h-full object-center object-cover"></img>
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">

                      <span className="absolute inset-0"></span>
                      Women

                    </h3>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">Many women accessories</p>
                  </div>

                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full h-full object-center object-cover"></img>
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">

                      <span className="absolute inset-0"></span>
                      Electronics

                    </h3>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">Huge electronics collection</p>
                  </div>
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
        </div>
      </div>
      <Faq />
    </>
  );
};

export default About;