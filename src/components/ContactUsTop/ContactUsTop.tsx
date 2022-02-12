import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export default class App extends React.PureComponent<IAppProps> {
  public render() {
    return (
      <div className='relative bg-white overflow-hidden '>
            
            <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-orange-100'>
            
            
            <main className="mx-auto max-w-7xl px-8 pt-10 ">
            <div className="sm:text-center lg:text-left pr-8">
              <h4 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
                <span className="block xl:inline">Enrich Your online business </span>{' '} 
                <span className="block text-indigo-600 xl:inline">  by Unity Mart</span>
              </h4>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              The Mutivendor E-commerce platform Unity Mart provides With the change of time people mainly customers/buyers are also motivating themselves in online shopping that’s how the e-commerce platforms have started their business by ensuring all the customer's needs online. Before how the customer bought products in the shop, we are also ensuring that experience on our website so that customers can enjoy their shopping
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
            
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1630672790237-38eeb57cb60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt=""
        />
      </div>
        </div>
    );
  }
}
