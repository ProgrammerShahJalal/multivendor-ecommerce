import React from "react";
import { Link } from 'react-router-dom';
import LottieContact from '../Lottie/LottieContact';

export interface IAppProps {
}

export default class App extends React.PureComponent<IAppProps> {
  public render() {
    return (
      <div className='relative bg-white overflow-hidden '>

        <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>


          <main className="mx-auto max-w-7xl px-8 pt-10 ">
            <div className="sm:text-center lg:text-left pr-8">
              <h4 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
                <span className="block xl:inline">Enrich Your online business </span>{' '}
                <span className="block text-indigo-600 xl:inline">  by Unity Mart</span>
              </h4>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                The Mutivendor E-commerce platform Unity Mart, Our main object is to give user the feel of online shopping as like as shopping from market.Our goal is to provide the best user interface and best user experience.

              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Go Home
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/shop" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Let's Go Shop
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div>
            <LottieContact />
          </div>
        </div>
      </div>
    );
  }
}
